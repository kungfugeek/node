const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/db');

const app = express();

const poll = require('./routes/poll');
const heroes = require('./routes/heroes');

cors({credentials: true, origin: true});

app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/poll', poll);
app.use('/heroes', heroes);

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));



