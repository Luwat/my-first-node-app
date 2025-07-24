const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html'); 
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact-me.html');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
})

app.listen(PORT);