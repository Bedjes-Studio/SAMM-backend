require('dotenv').config();

let env = process.env.NODE_ENV.trim(); // 'dev' or 'prod'

const dev = {
    api: {
        port: parseInt(process.env.DEV_API_PORT) || 3000,
        key: parseInt(process.env.DEV_API_KEY) || "azerty",
        tokenDuration: parseInt(process.env.DEV_API_TOKEN_DURATION) || "24h"
    },
    mongodb: {
        host: process.env.DEV_MONGODB_HOST || 'mongodb://127.0.0.1',
        port: parseInt(process.env.DEV_MONGODB_PORT) || 27017,
        name: process.env.DEV_MONGODB_NAME || 'dev'
    }
};

const prod = {
    api: {
        port: parseInt(process.env.PROD_API_PORT) || 3000,
        key: parseInt(process.env.PROD_API_KEY) || "azerty",
        tokenDuration: parseInt(process.env.PROD_API_TOKEN_DURATION) || "24h"
    },
    mongodb: {
        host: process.env.PROD_MONGODB_HOST || '127.0.0.1',
        port: parseInt(process.env.PROD_MONGODB_PORT) || 27017,
        name: process.env.PROD_MONGODB_NAME || 'prod'
    }
};

const config = {
    dev,
    prod
};

console.log(config[env]);

module.exports = config[env];