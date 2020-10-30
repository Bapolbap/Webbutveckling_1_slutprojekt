const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    img: 
    { 
        data: Buffer, 
        contentType: String 
    }
})