require('dotenv').config();

let env = process.env.NODE_ENV.trim(); // 'dev' or 'prod'

const dev = {
    api: {
        port: parseInt(process.env.DEV_API_PORT) || 3000,
        key: parseInt(process.env.DEV_API_KEY) || "azerty"
    },
    mongodb: {
        host: process.env.DEV_MONGODB_HOST || 'mongodb://localhost',
        port: parseInt(process.env.DEV_MONGODB_PORT) || 27017,
        name: process.env.DEV_MONGODB_NAME || 'nodejs'
    }
};

const prod = {
    app: {
        port: parseInt(process.env.PROD_API_PORT) || 3000
    },
    mongodb: {
        host: process.env.TEST_DB_HOST || 'localhost',
        port: parseInt(process.env.TEST_DB_PORT) || 27017,
        name: process.env.TEST_DB_NAME || 'test'
    }
};

const config = {
    dev,
    prod
};

console.log("Environment : " + env);

module.exports = config[env];