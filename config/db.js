const mongoose = require('mongoose');

//Map global promises
//should prevent some kind of wanring.
mongoose.Promise = global.Promise;

//Connect to Mongoose
mongoose.connect('mongodb://localhost/node')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));



