import { launches } from "../../models/launches.model.js";

const getAlllaunches = (req, res) => {
    const launchesValues = Array.from(launches.values());
    return res.status(200).json(launchesValues);
}

export {
    getAlllaunches
}