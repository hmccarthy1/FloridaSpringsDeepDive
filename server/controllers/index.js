const router = require('express').Router();
const userRoutes = require('./userRoutes.js')
const User = require('../models/User.js');
const Spring = require('../models/Spring.js')
const springRoutes = require('./springRoutes.js')
const {springSeed} = require('../seed.js')
const path = require('path');





router.use('/users', userRoutes);
router.use('/springs', springRoutes)
router.post('/runseed', async (req, res) => {
  
  try {
    await Spring.deleteMany({});
    await Spring.create(springSeed.List)
    

    res.status(200).send({message: "Seed ran successfully"});
} catch (err) {
    res.status(400).send(err);
}


}
)


router.get('/*', async (req, res) => {
 try {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));

 }
catch (err) {
  res.status(500).send(err)
}
  
  
})








module.exports = router;
