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
        this.express.use(this.accesscontrol);
    }

    private accesscontrol(req:any,res:any,next:any){
        res.header('Access-Control-Allow-Methods','POST');
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Headers','Access-Control-Allow-Methods,Access-Control-Allow-Origin,Content-Type');
        next();
    }


    private routes(){
        this.express.use('/', this.router);
        this.express.use("/getgoogle",googleResponse)
    }
}
export default new App().express;
