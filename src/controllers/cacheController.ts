import { NextFunction, Request, Response } from "express";
import CacheService from "../services/CacheService";
import logger from "../utils/logger";

export default class CacheController{
    public static async getValue(req: Request, res: Response, next: NextFunction){
        try{
            let {key} = req.params;
            let response = CacheService.getValue(key);
            
            res.status(200).json({
                value: response
            });
        }
        catch(err){
            logger.error(err);
            next(err);
        }
    }

    public static async createEntry(req: Request, res: Response, next: NextFunction){
        try{
            let {key} = req.params;
            let {value} = req.body;

            let response = CacheService.createEntry(key, value);
            console.log('RESP:', response);
            
            res.status(200).send(`Created: ${response}`);
        }
        catch(err){
            logger.error(err);
            next(err);
        }
    }

    public static async deleteEntry(req: Request, res: Response, next: NextFunction){
        try{
            let {key} = req.params;
            let response = CacheService.deleteEntry(key);

            res.status(200).send(`Deleted: ${response}`);
        }
        catch(err){
            logger.error(err);
            next(err);
        }
    }
}