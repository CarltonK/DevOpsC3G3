// Import express module
const express = require('express');

// Initialize express
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send({ hello: 'world' });
});

app.post('/', (req, res) => {
    res.send('<p>This is a post request</p>');
});

app.listen(port, () => {
    console.log('App is running');
});