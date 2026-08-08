# Production-Grade Node.js Express Boilerplate Setup Guide

This guide details how to build and configure a highly resilient, production-grade Express.js backend. It features **structured logging**, **contextual request tracing**, **automatic transaction propagation**, a **Base Handler business logic pattern**, and a **Redis-backed rate limiter with memory fallback**.

---

## 🛠️ Step 1: Choose Your Stack

Before starting the setup, identify your Database and ORM of choice:

### 1. Database Option
*   **PostgreSQL** (Recommended for robust relational needs, transactional integrity, and concurrent scaling).
*   **MySQL** (Standard relational database option).
*   **SQLite** (Ideal for local development, testing, and light workloads).

### 2. ORM Option
*   **Sequelize** (Robust, promise-based Node.js ORM).
*   **Prisma** (Next-generation Node.js & TypeScript ORM with auto-generated queries).
*   **TypeORM** (Excellent TypeScript support, Data Mapper and Active Record patterns).

---

## 🚀 Step 2: Core Components

Here is how to set up each tier of the stack in one go:

### 1. Request Context & Tracing Middleware (`request.middleware.js`)
Generates a unique `traceId` for each incoming request and sets up a child logger for transaction tracing.

```javascript
import { v4 as uuidv4 } from 'uuid';
import { Logger } from '../utils/logger.js';

export default function requestMiddleware() {
  return (req, res, next) => {
    const traceId = req.headers['x-trace-id'] || uuidv4();
    req.traceId = traceId;
    res.setHeader('x-trace-id', traceId);

    // Extract Proxy-safe IP
    req.clientIp = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.ip;

    // Create a context-specific logger instance
    req.logger = Logger.child({ traceId, ip: req.clientIp });
    req.logger.info(`Incoming Request: ${req.method} ${req.url}`);
    
    next();
  };
}
```

---

### 2. Database & Transaction Context Middleware

Select your ORM tab to view the implementation:

#### Option A: Sequelize Transaction Context
```javascript
export default function contextMiddleware(db) {
  return async (req, res, next) => {
    // Inject models into request context
    req.context = {
      models: db.models,
      logger: req.logger,
      traceId: req.traceId,
      transaction: null,
      markTransactionForRollback: null
    };

    let forceRollback = false;

    try {
      // Start managed database transaction
      req.context.transaction = await db.sequelize.transaction({
        isolationLevel: db.Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
      });

      req.context.markTransactionForRollback = () => {
        forceRollback = true;
      };

      res.on('finish', async () => {
        if (req.context.transaction) {
          if (res.statusCode >= 400 || forceRollback) {
            await req.context.transaction.rollback();
            req.logger.warn('Database transaction rolled back successfully.');
          } else {
            await req.context.transaction.commit();
            req.logger.info('Database transaction committed successfully.');
          }
        }
      });

      next();
    } catch (err) {
      if (req.context.transaction) {
        await req.context.transaction.rollback();
      }
      next(err);
    }
  };
}
```

#### Option B: Prisma Interactive Transactions
```javascript
export default function contextMiddleware(prisma) {
  return async (req, res, next) => {
    req.context = {
      prisma,
      logger: req.logger,
      traceId: req.traceId,
      transaction: null
    };

    // Prisma manages transactions using client.$transaction(async (tx) => { ... })
    // In Express, request transactions can be routed using Prisma's interactive transaction hooks:
    next();
  };
}
```

---

### 3. Centralized Base Handlers (`src/libs/base.handler.js`)
Encapsulates business logic, enforces validation, executes logging, and links automatically to the middleware transaction context.

```javascript
import { AppError } from '@src/errors/app.error.js';
import Errors from '@src/errors/errorCodes.js';
import dayjs from 'dayjs';

export class BaseHandler {
  constructor(args = {}, context = {}) {
    this.args = args;
    this.context = context;
    this.dbTransaction = context.transaction || context.sequelizeTransaction;
    this.t = this.dbTransaction; // Shorthand alias
    this.logger = context.logger;
    this.traceId = context.traceId;
  }

  static async execute(args = {}, context = {}) {
    const startTime = dayjs();
    const handlerName = this.name;
    const instance = new this(args, context);

    try {
      instance.logger.info(`Handler execution started: ${handlerName}`, {
        args: this.sanitizeArgs ? this.sanitizeArgs(args) : args
      });

      const result = await instance.run();
      const duration = dayjs().diff(startTime);
      
      instance.logger.info(`Handler execution completed: ${handlerName} (${duration}ms)`);
      return result;
    } catch (error) {
      if (instance.context && instance.context.markTransactionForRollback) {
        instance.context.markTransactionForRollback();
      }

      throw error instanceof AppError
        ? error
        : new AppError(Errors.INTERNAL_ERROR, {
            message: `Handler ${handlerName} failed: ${error?.message || 'Unknown error'}`
          });
    }
  }

  async run() {
    throw new Error('The run() method must be implemented by subclasses.');
  }

  validateArgs(args) {}
  static sanitizeArgs(args) { return args; }
}
```

---

### 4. Redis Rate Limiter with Memory Fallback (`rateLimit.middleware.js`)
Keeps your endpoints protected even if Redis goes down by automatically falling back to an in-memory token bucket.

```javascript
import { RateLimiterMemory, RateLimiterRedis } from 'rate-limiter-flexible';
import { redisClient } from '../libs/redis.js';
import { AppError } from '../errors/app.error.js';

export default function rateLimitMiddleware(options = {}) {
  const { points = 100, duration = 900, keyPrefix = 'rl' } = options;

  const memoryLimiter = new RateLimiterMemory({ points, duration });
  let redisLimiter = null;

  const getRedisLimiter = () => {
    if (!redisLimiter && redisClient) {
      redisLimiter = new RateLimiterRedis({
        storeClient: redisClient,
        keyPrefix,
        points,
        duration,
        insuranceLimiter: memoryLimiter
      });
    }
    return redisLimiter;
  };

  return async (req, res, next) => {
    const ip = req.clientIp || req.ip;
    const rateLimitKey = `${keyPrefix}:${ip}`;

    try {
      const activeRedisLimiter = getRedisLimiter();

      if (activeRedisLimiter && redisClient && redisClient.status === 'ready') {
        try {
          const rateLimiterRes = await activeRedisLimiter.consume(rateLimitKey);
          res.setHeader('X-RateLimit-Limit', points);
          res.setHeader('X-RateLimit-Remaining', rateLimiterRes.remainingPoints);
          return next();
        } catch (rejRes) {
          res.setHeader('Retry-After', Math.ceil(rejRes.msBeforeNext / 1000));
          throw AppError.rateLimit('Too many requests, please try again later.');
        }
      }

      // Memory Fallback
      const rateLimiterRes = await memoryLimiter.consume(rateLimitKey);
      res.setHeader('X-RateLimit-Limit', points);
      res.setHeader('X-RateLimit-Remaining', rateLimiterRes.remainingPoints);
      next();
    } catch (err) {
      next(err);
    }
  };
}
```

---

### 5. Graceful Lifecycle Terminations (`index.js`)
Handles clean shutdowns for Database Pools, HTTP server, and Redis clients.

```javascript
const shutdown = async (signal) => {
  console.log(`Received ${signal}. Starting graceful shutdown...`);
  
  server.close(() => {
    console.log('HTTP Server closed.');
  });
  
  if (db.sequelize) {
    await db.sequelize.close();
    console.log('Database connection pool closed.');
  }
  
  if (redisClient) {
    await redisClient.quit();
    console.log('Redis connection closed.');
  }
  
  process.exit(0);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
```
