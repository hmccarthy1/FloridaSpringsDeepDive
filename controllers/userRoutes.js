const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs")

router.post('/', async (req, res) => {
    console.log('hitting')
    try {
        
        console.log('pw', req.body.password);
        const saltedPW = await bcrypt.hash(req.body.password, 10);
        console.log(saltedPW);
        req.body.password = saltedPW
        const newUser = await User.create(req.body);
        console.log('created')
        res.status(200).send(newUser)
    }
    catch (err) {
        console.log('creation failed')
        res.status(400).send(err)
    }
});


router.get('/users', async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).send(allUsers)
    }
    catch (err) {
        res.status(400).send(err)
    }
})













module.exports = router;
