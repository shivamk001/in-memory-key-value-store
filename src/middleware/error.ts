import { Request, Response, NextFunction } from "express"
import CacheError from "../utils/error";

const errorMiddleware = (err: CacheError, req: Request, res: Response, Next: NextFunction)=>{
    let status = err.status;
    let message = err.message;
    res.status(status).json(message);
}

export default errorMiddleware;