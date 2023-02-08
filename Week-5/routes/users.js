const express = require('express');
const userModel = require('./../models/users');

const router = express.Router();

// CRUD
// Create
router.post('/', async function (req, res) {
    const data = new userModel({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });
    try {
        const savedData = await data.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read
router.get('/', async function (req, res) {
    try {
        const data = await userModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update
router.patch('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const data = req.body;

        const updatedData = await userModel.findByIdAndUpdate(id, data);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete
router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const deletedData = await userModel.findByIdAndDelete(id);
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;