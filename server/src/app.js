import express from 'express';
import cors from 'cors';
import planetsRouter from './routes/planets/planets.router.js';
import launchesRouter from './routes/launches/launches.router.js';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

app.use(planetsRouter);
app.use(launchesRouter);

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/../public/index.html`);
})

export default app;