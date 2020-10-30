import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './router';
import { createConnection } from 'typeorm';
import config from './config/dbConfig';
import * as path from 'path';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routerSetup();
        this.mysqlSetup();
        this.views();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private views(): void {
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
    }

    private routerSetup() {
        for (const route of router) {
            this.app.use(route.getPrefix(), route.getRouter());
        }
    }

    private mysqlSetup() {
        createConnection(config)
            .then(connection => {
                console.log('Has connected to DB? ', connection.isConnected);
            })
            .catch(error => console.log('TypeORM connection error: ', error));
    }
}

export default new App().app;
