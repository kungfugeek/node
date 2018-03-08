const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    wins: {
        type: Number
    },
    losses: {
        type: Number
    }
});

//Create collection
const Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;