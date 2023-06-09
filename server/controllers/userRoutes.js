const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs")

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
})













module.exports = router;
