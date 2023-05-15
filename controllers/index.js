const router = require('express').Router();
const userRoutes = require('./userRoutes.js')
const User = require('../models/User.js')
const springRoutes = require('./springRoutes.js')

router.use('/users', userRoutes);
router.use('/springs', springRoutes)








module.exports = router;
