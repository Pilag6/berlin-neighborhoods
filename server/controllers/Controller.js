import asyncHandler from "../config/asyncHandler.js";
import Model from "../models/Model.js";

/* 
@desc    Create a new model
@route   POST /api/models
@access  Public
*/
const create = asyncHandler(async (req, res) => {
    try {
        const neighborhood = new Model(req.body);
        await neighborhood.save();
        res.status(201).json(neighborhood);
    } catch (err) {
        res.status(400).send(err);
    }
});

/* 
@desc    Get all models
@route   GET /api/models
@access  Public
*/
const getAll = asyncHandler(async (req, res) => {
    try {
        const neighborhoods = await Model.find();
        res.json(neighborhoods);
    } catch (err) {
        res.status(500).send(err);
    }
});

/* 
@desc    Get an model by ID
@route   GET /api/models/:id
@access  Public
*/
const getById = asyncHandler(async (req, res) => {
    try {
        const neighborhood = await Model.findById(req.params.id);
        if (neighborhood) {
            res.json(neighborhood);
        } else {
            res.status(404).send("Neighborhood not found");
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

/* 
@desc    Update an model
@route   PATCH /api/models/:id
@access  Public
*/
const update = asyncHandler(async (req, res) => {
    try {
        const neighborhood = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (neighborhood) {
            res.json(neighborhood);
        } else {
            res.status(404).send("Neighborhood not found");
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

/* 
@desc    Delete an model
@route   DELETE /api/models/:id
@access  Public
*/
const deleteOne = asyncHandler(async (req, res) => {
  try {
    const neighborhood = await Model.findByIdAndDelete(req.params.id);
    if (neighborhood) {
        res.status(204).send();
    } else {
        res.status(404).send('Neighborhood not found');
    }
} catch (err) {
    res.status(500).send(err);
}
});

/* 
@desc    Delete all models
@route   DELETE /api/models
@access  Public
*/
const deleteAll = asyncHandler(async (req, res) => {
    await Model.deleteMany();
    res.status(200).json({ message: "All <models> are deleted." });
});

export { create, getAll, getById, update, deleteOne, deleteAll };
