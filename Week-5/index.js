require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users');

const connectionString = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose.connect(connectionString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected');
});

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.status(200).send('Server is running');
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});