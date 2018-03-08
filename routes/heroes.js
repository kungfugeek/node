const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Hero = require('../models/hero');

// the '/' really means '/heroes' as set in app.js
router.get('/', (req, res) => {

    Hero.find().then(heroes => {
        console.log(`Sending ${heroes}`);
        res.json(heroes);
    })
    .catch(err => {
        return handleError(err, res);
    })

 });

 router.get('/:id', (req, res) => {
    const id = req.params.id;

    Hero.findOne({_id:id}).then(hero => {
        console.log(`Sending ${hero}`);
        res.json(hero);  
    })
    .catch(err => {
        return handleError(err, res);
    })

 });

router.post('/', (req, res) => {
    Hero.create(req.body)
    .then(hero => {
        console.log(`Created ${hero}`);
        return res.json(hero);
    })
    .catch(err => {
        return handleError(err, res);
    })
});

router.put('/', (req, res) => {
    const h = {
        name: req.body.name,
        wins: req.body.wins,
        losses: req.body.losses
    };
    console.log(req.body);
    Hero.findOneAndUpdate({_id:req.body._id}, h, {new: true})
    .then(hero => {
        console.log(`Updated ${hero}`);
        return res.json(hero);
    })
    .catch(err => {
        return handleError(err, res);
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Hero.deleteOne({_id:id})
    .then(_ => {
        return res.status(200).json(null);
    })
    .catch(err => {
        return handleError(err, res);
    })
});

handleError = ((err, res) => {
    console.log(`error: ${err}`);
    return res.status(500).json({status: 500, success: false, message: err.message});

});

module.exports = router;
