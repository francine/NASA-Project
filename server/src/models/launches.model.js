const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-422 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}


launches.set(launch.flightNumber, launch);

const existsLaunchWithId = (launchId) => {
    return launches.has(launchId);
}

const launchesModel = () => {
    return Array.from(launches.values())
}

const newLaunch = (launch) => {
    latestFlightNumber += 1;
    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber
    })

    launches.set(launch.flightNumber, newLaunch);
    return newLaunch
}

const abortLaunchById = (launchId) => {
    const aborted = launches.get(launchId);
    aborted.success = false;
    aborted.upcoming = false;
    return aborted;
}

export {
    launchesModel,
    newLaunch,
    existsLaunchWithId,
    abortLaunchById
}
