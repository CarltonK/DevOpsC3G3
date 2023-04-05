const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users');

const connectionString = process.env.DATABASE_URL;

mongoose.connect(connectionString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ status: true });
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});