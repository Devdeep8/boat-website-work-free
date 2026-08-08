// src/rest-resources/routes/api/v1/index.js
import { Router } from 'express';
import demoRoutes from './demo.routes.js';
import packagesRoutes from './packages.routes.js';

const router = Router();

// Register all v1 routes here.
router.use('/demo', demoRoutes);
router.use('/packages', packagesRoutes);

export default router;
