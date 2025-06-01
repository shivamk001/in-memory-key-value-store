import Cache, { isInit } from "../utils/cache";
import CacheError from "../utils/error";
import logger from "../utils/logger";

export default class CacheService{
    public static getValue(key: string){
        this.checks(key);
        
        logger.info(`Get Value: ${key}`);

        if(!this.hasKey(key)){
            throw new CacheError(404, 'Key not found');
        }

        let value = Cache[key];
        
        return value;
    }

    public static createEntry(key: string, value: any): boolean{
        this.checks(key);

        logger.info(`Create Entry: ${key} ${JSON.stringify(value)}`);

        Cache[key] = value;

        return true;
    }

    public static deleteEntry(key: string){
        this.checks(key);

        logger.info(`Delete Entry: ${key}`);

        let hasKey = this.hasKey(key);

        if(!hasKey){
            throw new CacheError(404, 'Key not found');
        }

        delete Cache[key];

        return true;
    }

    private static hasKey(key: string): boolean{
        
        if(Cache.hasOwnProperty(key)){
            return true;
        }
        
        return false;
    }

    private static checks(key: string){
    // check if initialized
    if(!isInit){
        throw new CacheError(500, 'Cache not initialized');
    }
    // check if key is truthy
    if(!key){
        throw new CacheError(400, 'Invalid Key');
    }
    }
}