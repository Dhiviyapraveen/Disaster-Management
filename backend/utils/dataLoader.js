import fs from 'fs';
import csv from 'csv-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Disaster from '../models/Disaster.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const disasters = [];

fs.createReadStream('./data/natural_disasters_2024.csv')
    .pipe(csv())
    .on('data', (row) => {
        // Parse fields safely
        const disasterID = parseInt(row.Disaster_ID);
        const disasterType = row.Disaster_Type || null;
        const location = row.Location || null;
        const magnitude = parseFloat(row.Magnitude);
        const timestamp = new Date(row.Date);
        const fatalities = parseInt(row.Fatalities);
        const economicLoss = parseFloat(row['Economic_Loss($)']);

        // Only insert row if disasterID and timestamp are valid
        if (!isNaN(disasterID) && !isNaN(timestamp)) {
            disasters.push({
                disasterID: disasterID,
                disasterType: disasterType,
                location: location,
                magnitude: !isNaN(magnitude) ? magnitude : null,
                timestamp: timestamp,
                fatalities: !isNaN(fatalities) ? fatalities : null,
                economicLoss: !isNaN(economicLoss) ? economicLoss : null
            });
        } else {
            console.warn('Skipping invalid row:', row);
        }
    })
    .on('end', async () => {
        try {
            if (disasters.length === 0) {
                console.log('No valid rows to insert.');
                process.exit();
            }
            await Disaster.deleteMany({}); // optional: clear old data
            await Disaster.insertMany(disasters);
            console.log('Disaster data loaded successfully:', disasters.length, 'rows');
            process.exit();
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    });
