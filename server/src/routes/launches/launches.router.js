import { Router } from "express";
import { getAlllaunches } from "./launches.controller.js";

const launchesRouter = Router();

launchesRouter.get('/launches', getAlllaunches);

export default launchesRouter;