import express, {Request, Response} from 'express';
import { BACK_PORT } from './config';
import cors from 'cors'
import path from 'path';

const app = express();

app.use(cors)

app.get('/', (req: Request, res: Response) => {
    res.send("Backend is running")
});

app.get('/images', express.static(path.join(__dirname, '../img')))


app.listen(BACK_PORT, () => {
    console.log(`Server run is port:${BACK_PORT}`)
})