const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ status: true });
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});