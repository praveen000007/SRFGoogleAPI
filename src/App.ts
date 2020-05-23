import express from 'express';
import * as bodyParser from 'body-parser'
import {googleResponse} from "./getResponseFromGoogle";

class App {
    public express: express.Application;
    public router: express.Router;

    constructor() {
        this.express = express();
        this.router = express.Router();
        this.loadMiddlewares();
        this.routes();
    }

    private loadMiddlewares(): void {
        this.express.use(bodyParser.json());
    }

    private routes(){
        this.express.use('/', this.router);
        this.express.use("/getgoogle",googleResponse)
    }
}
export default new App().express;
