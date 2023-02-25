import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

import studentsRouter from './routes/studentsRouter';

class App{
    constructor() {
        this.expressApp = express();
        this.configureRoutes();
        this.configureMiddlewares();
        this.configureErrorHandling();
    }

    async configureMiddlewares() {
        this.expressApp.use(helmet());
        this.expressApp.use(cors());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(bodyParser.json());
    }

    configureRoutes() {
        this.expressApp.use('/students', studentsRouter);
    }

    configureErrorHandling() {}
}

export default new App().expressApp;