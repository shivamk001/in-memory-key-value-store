class CacheClass{
    public _cache: {[key: string]: any} = {};
    public _isInitialized = false;

    constructor(){
        this._cache = {};
        this._isInitialized = true;
        console.log('CACHE INIT');   
    }
}

let instance = new CacheClass();

export const isInit = instance._isInitialized;
export default instance._cache;