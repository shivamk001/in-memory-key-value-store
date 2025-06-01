import { Request, Response, NextFunction } from "express"


const logRequest = (req: Request, res: Response, next: NextFunction) =>{
    console.log('Req:', req.url);
    next();
}

export default logRequest;