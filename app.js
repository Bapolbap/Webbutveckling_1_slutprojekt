const express = require('express');
const mongoose = require('mongoose');
const dBModule = require('./dBModule');
const app = express();
const port = 3000;
const clientDir = __dirname + "\\client\\";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(clientDir))

app.get('/', (req, res) => {
    res.render(clientDir + "index.ejs")
});

app.get('/pokedex', (req, res) => {
    res.render(clientDir + "pokedex.ejs")
});

app.get('/typechart', (req, res) => {
    res.render(clientDir + "typechart.ejs")
});

app.get('/about', (req, res) => {
    res.render(clientDir + "about.ejs")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))