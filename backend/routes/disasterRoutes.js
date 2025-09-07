import express from 'express';
import Disaster from '../models/Disaster.js';

const router = express.Router();

// Get all disasters
router.get('/', async (req, res) => {
    try {
        const disasters = await Disaster.find().limit(100); // limit for testing
        res.json(disasters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
