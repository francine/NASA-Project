import { launchesModel, newLaunch, existsLaunchWithId, abortLaunchById } from "../../models/launches.model.js";

const getAllLaunches = (req, res) => {
    console.log('teste', launchesModel())
    return res.status(200).json(launchesModel());
}

const addNewLaunch = (req, res) => {
    const launch = req.body;
    
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date'
        });
    }

    const newLanch = newLaunch(launch);
    return res.status(200).json(newLanch);
}

const deleteLaunch = (req, res) => {
    console.log('teste', req.params.id)
    const launchId = parseInt(req.params.id);

    if (!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: 'Launch not found'
        });
    }
    
    const aborted = abortLaunchById(launchId)
    return res.status(200).json(aborted);
}

export {
    getAllLaunches,
    addNewLaunch,
    deleteLaunch
}