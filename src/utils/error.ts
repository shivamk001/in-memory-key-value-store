export default class CacheError extends Error{
    status: number = 404;
    constructor(status: number, message: string){
        super();
        this.status = status;
        this.message = message;
    }
}