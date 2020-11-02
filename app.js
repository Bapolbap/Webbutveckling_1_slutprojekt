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

app.get('/generations/1', (req, res) => {
    res.render(clientDir + "/generations/1.ejs")
});

app.get('/generations/2', (req, res) => {
    res.render(clientDir + "/generations/2.ejs")
});

app.get('/generations/3', (req, res) => {
    res.render(clientDir + "/generations/3.ejs")
});

app.get('/generations/4', (req, res) => {
    res.render(clientDir + "/generations/4.ejs")
});

app.get('/generations/5', (req, res) => {
    res.render(clientDir + "/generations/5.ejs")
});

app.get('/generations/6', (req, res) => {
    res.render(clientDir + "/generations/6.ejs")
});

app.get('/generations/7', (req, res) => {
    res.render(clientDir + "/generations/7.ejs")
});

app.get('/generations/8', (req, res) => {
    res.render(clientDir + "/generations/8.ejs")
});

app.get('/trivia/history', (req, res) => {
    res.render(clientDir + "/trivia/history.ejs")
});

app.get('/trivia/about-the-game', (req, res) => {
    res.render(clientDir + "/trivia/about-the-game.ejs")
});

app.get('/trivia/ingame-trivia', (req, res) => {
    res.render(clientDir + "/trivia/ingame-trivia.ejs")
});

app.get('/trivia/other', (req, res) => {
    res.render(clientDir + "/trivia/other.ejs")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))