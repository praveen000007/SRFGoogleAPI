
import {NextFunction, Request, Response, Router} from "express";
const  googleIt = require('google-it')


class GetResponseFromGoogle {
    private router: Router;
    constructor(){
        this.router = Router();
        this.initRoutes();
    }

    private getResults = (req: Request, res: Response, next: NextFunction) =>{
        console.log(req.body)
        let search=req.body.search
        googleIt({'query': search}).then((resp: any)=>{
            console.log(resp)
            let result=resp[1]
            console.log(result)
           res.send(this.getSuccessResponse(result['snippet']))
        }).catch((err:any)=>{
            console.log(err)
        })
    }

    private getSuccessResponse(result:any){
        return {
            status:"success",
            result:result
        }
    }
    public get $router(): Router {
        return this.router;
    }

    public set $router(value: Router) {
        this.router = value;
    }
    private initRoutes(){
        console.log("Initializing googleResults Route")
        this.router.post("/responseresults", this.getResults);
    }
}

export const googleResponse = new GetResponseFromGoogle().$router;
