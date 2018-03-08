const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

//Create collection
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;