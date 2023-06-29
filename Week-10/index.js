const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const environment = process.env.NODE_ENV || 'localhost';

app.use(express.json());

app.post('/', (req, res) => {
    console.log(`We have received a POST request from ${req.hostname}`);
    res.status(200).json({ ...req.body });
});

app.get('/', (req, res) => {
    console.log(`We have received a GET request from ${req.hostname}`);
    res.status(200).json({ hello: 'world' });
});

app.listen(PORT, () => {
    console.log(`App is running on ${environment} environment`);
    console.log(`App is listening on http://localhost:${PORT}`);
});