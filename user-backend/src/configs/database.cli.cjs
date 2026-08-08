// src/configs/database.cli.cjs
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Locate and load environment variables from root directory
const envPath = path.resolve(__dirname, '..', '..', '.env');
if (fs.existsSync(envPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  for (const key in envConfig) {
    process.env[key] = envConfig[key];
  }
}

const dbConfig = {
  dialect: 'postgres',
  database: process.env.DB_NAME || 'api',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_WRITE_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  dialectOptions: {
    application_name: process.env.APP_NAME || 'crm-user-backend'
  },
  logging: false,
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'sequelize_migration_meta',
  seederStorage: 'sequelize',
  seederStorageTableName: 'sequelize_seed_meta'
};

module.exports = {
  development: dbConfig,
  test: dbConfig,
  staging: dbConfig,
  production: dbConfig
};
