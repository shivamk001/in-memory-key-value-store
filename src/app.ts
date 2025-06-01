import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import logRequest from "./middleware/logger";

const app = express();

app.use(bodyParser.json());

app.use(logRequest);

app.get('/uptime', (req: Request, res: Response)=>{
    res.status(200).send('UP');
})

export default app;