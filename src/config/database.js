const { resolve } = require('path');

require('dotenv').config({path: resolve(__dirname, '..', '..', '.env') });

module.exports = {
    development: {
        dialect: process.env.DB_DIALECT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        define: {
            timestamp: true,
            underscored: true,
            underscoredAll: true,
        }
    },
    test: {
        dialect: 'sqlite',
        storage: resolve(__dirname, '..', '..', 'db.sqlite'),
        define: {
            timestamp: true,
            underscored: true,
            underscoredAll: true,
        }
    }
};