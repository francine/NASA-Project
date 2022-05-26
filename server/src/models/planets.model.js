import { parse } from 'csv-parse';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pathData = `${__dirname}/../../data/kepler_data.csv`;
const planets = [];

const isHabitablePlanet = (planet) => {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

const loadPlanetsData = () => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(pathData)
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', data => {
                if (isHabitablePlanet(data)) {
                planets.push(data);
                }
            })
            .on('error', err => {
                console.log(err);
                rejects(err);
            })
            .on('end', () => {
                console.log(`${planets.length} habitable planets found!`);
                resolve();
            });
    });
}

export {
    loadPlanetsData,
    planets
}

