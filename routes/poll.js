const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require('../models/Vote');

// the '/' really means '/poll' as set in app.js
router.get('/', (req, res) => {
    res.send('in poll');
});

router.post('/', (req, res) => {
    const newVote = {
        os: req.body.os
    }

    new Vote(newVote).save()
    .then(vote => {
        return res.json({success: true, message: 'Got it'});
    })
});

module.exports = router;
