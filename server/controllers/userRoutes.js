const router = require('express').Router();
const { ObjectId } = require('mongodb');
const Spring = require('../models/Spring')
const User = require('../models/User');
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');


router.post('/', async (req, res) => {
    console.log('hitting')
    try {
        
       
        const newUser = await User.create(req.body);
        console.log('created')
        res.status(200).send(newUser)
    }
    catch (err) {
        console.log('creation failed', err)
        res.status(400).send(err)
    }
});


router.get('/users', async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).send(allUsers)
    }
    catch (err) {
        console.log(err, "err")
        res.status(400).send(err)
    }
}),

router.post('/:userID/favoriteSpring/:springId', async (req, res) => {
    console.log('HITTING TOP')
    try {
        console.log('HITTING')
        const userToPost = await User.findById(req.params.userID);
        console.log(userToPost.favoriteSprings);
        const found = false

        if (
        userToPost.favoriteSprings.some(function (springId) {
            return springId.equals( new ObjectId(req.params.springId))  
        })  ) {
            
            userToPost.favoriteSprings.pull(new ObjectId(req.params.springId));
            userToPost.save()

            res.status(200).send({message: 'Your spring was unfavorited'})
        } else {
            userToPost.favoriteSprings.addToSet(req.params.springId);
            userToPost.save();
            res.status(200).send({message: "Spring added successfully"})
        }


           
        

        
    } catch (err) {
        console.log(err)
        res.status(400).send({message: 'There was a problem adding this spring to your favorites'})
    }
})













module.exports = router;
