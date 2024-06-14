import { Schema, model } from "mongoose";

// Create Schema

const modelSchema = new Schema(
    {
        name: String,
        lat: Number,
        lng: Number
    },
    {
        timestamps: true
    }
);

// Create Model

const Model = model("models", modelSchema);

export default Model;
