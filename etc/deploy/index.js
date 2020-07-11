const express = require('express');
const path = require('path');

const app = express();

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat/index.html'));
});

// Serve the static files from the React app
app.use('/documentation', express.static(path.join(__dirname, 'documentation')));
// Serve the static files from the React app
app.use('/chat', express.static(path.join(__dirname, 'chat')));

// Handles any requests that don't match the ones above
app.get('/health', (req, res) => {
    res.status(200);
    res.send('OK');
});

app.get('/documentation', (req, res) => {
    res.sendFile(path.join(`${__dirname}/documentation/index.html`));
});

const port = 8080;
console.error(`running in port ${port}`);
app.listen(port);
