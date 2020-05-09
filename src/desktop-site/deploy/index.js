const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'documentation')));

// Handles any requests that don't match the ones above
app.get('/health', (req, res) => {
    res.status(200);
    res.send('OK');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/documentation/index.html`));
});

const port = 5002;
app.listen(port);
