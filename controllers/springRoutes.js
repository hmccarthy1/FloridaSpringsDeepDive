const router = require('express').Router();
const Spring = require('../models/Spring')
router.post('/', async (req, res) => {
    try {
        const newSpring = await Spring.create(req.body);
        res.status(200).send(newSpring)
    }
    catch (err) {
        res.status(400).send(err)
    }
})







module.exports = router;