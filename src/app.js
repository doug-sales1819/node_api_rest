import express from 'express';
import bodyParser from 'body-parser';

class App{
    constructor() {
        this.app = express();
        this.routes();
        this.middlewares();
    }

    middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    routes() {

    }

    
}

export default new App().app;