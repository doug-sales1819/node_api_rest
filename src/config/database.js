const { resolve } = require('path');

require('dotenv').config({path: resolve(__dirname, '..', '..', '.env') });

module.exports = {
    development: {
        dialect: process.env.DIALECT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        define: {
            timestamp: true,
            underscored: true,
            underscoredAll: true,
            freezeTableName: false,
        },
        defineOptions: {
            createdAt: 'create_at',
            updateAt: 'update_at'
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: (...msg) => console.log(msg),
        timeZone: 'America/Sao_Paulo',
    }
};