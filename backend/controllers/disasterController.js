import Disaster from "../models/Disaster.js";

// Fetch all disaster records
export const getAllDisasters = async (req, res) => {
    try {
        const disasters = await Disaster.find().sort({ timestamp: -1 });
        res.json(disasters);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Fetch disasters above a threshold (example: water_level > 4)
export const getHighRiskDisasters = async (req, res) => {
    try {
        const disasters = await Disaster.find({ water_level: { $gt: 4 } }).sort({ timestamp: -1 });
        res.json(disasters);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
