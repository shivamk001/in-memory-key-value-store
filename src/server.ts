import app from "./app";
import { cacheRouter } from "./routes/cache";
import errorMiddleware from "./middleware/error";

app.use(cacheRouter);

app.use(errorMiddleware);

app.listen(3000, ()=>{
    console.log('SERVER RUNNING');
})