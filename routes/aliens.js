const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async(req, res) => {
    try{    
        //if there is no error what do you want to do?
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(err){
        res.send("Error is " + err); //catching all error
    }
})

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        likeTech: req.body.likeTech
    });

    try{
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send('Error');
    }
})

module.exports = router;