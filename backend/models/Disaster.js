import mongoose from "mongoose";

const disasterSchema = new mongoose.Schema({
    disasterID: { type: Number, required: true, unique: true },
    disasterType: { type: String },
    location: { type: String },
    magnitude: { type: Number },
    timestamp: { type: Date, required: true },
    fatalities: { type: Number },
    economicLoss: { type: Number }
});

export default mongoose.model("Disaster", disasterSchema);
