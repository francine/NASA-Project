import { Router } from "express";
import { getAllLaunches, addNewLaunch, deleteLaunch } from "./launches.controller.js";

const launchesRouter = Router();

launchesRouter.get('/launches', getAllLaunches);
launchesRouter.post('/launches', addNewLaunch);
launchesRouter.delete('/launches/:id', deleteLaunch);

export default launchesRouter;