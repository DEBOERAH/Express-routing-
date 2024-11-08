//import express
const express = require('express');

//create express appinstance
const app = express();

//define port
const port = 3096;

// define index route
app.get('/', (req, res) => {
    // send index.html
    res.sendFile(__dirname + '/index.html');
});
// define /austine route

app.get('/Austin.html', (req, res) => {
    // send index.html
    res.sendFile(__dirname + '/Austin.html');
});
// define /mimi route
app.get('/mimi.html', (req, res) => {
    // send index.html
    res.sendFile(__dirname + '/mimi.html');
});

// define /ada route
app.get('/ada.html', (req, res) => {
    // send index.html
    res.sendFile(__dirname + '/ada.html');
});



// listen to port 
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})