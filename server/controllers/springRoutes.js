const router = require('express').Router();
const Spring = require('../models/Spring');
const amenityTypeChoices = require('../models/amenityTypeChoices')

router.post('/', async (req, res) => {
    try {
        const newSpring = await Spring.create(req.body);
        res.status(200).send(newSpring)
    }
    catch (err) {
        res.status(400).send(err)
    }
});

router.post('/:springID/amenities', async (req, res) => {
    try {
        const amenitiesList = req.body.List;
        
        var springUpdate = await Spring.findById(req.params.springID);
        
        for (var i = 0; i < amenitiesList.length; i++) {
            const newAmenity =  springUpdate.amenities.push(amenitiesList[i]);
            await springUpdate.save();
            console.log("----------------CREATED-------------------")

        };
        springUpdate = await Spring.findById(req.params.springID);
        res.status(200).send(springUpdate.amenities)
    } catch (err) {
        res.status(400).err
    }
})

router.delete('/:springID/amenities', async (req, res) => {
    
    try {
    const springToFind = await Spring.findById(req.params.springID);
    console.log("SPRING", springToFind.springName);
    const amenitiesList = springToFind.amenities;
    console.log('AMENITITES', amenitiesList);
    // for (var i =0; i < amenitiesList.length; i++)  {
    //     amenitiesList.pull({_id: this._id});
        
    // }
    springToFind.amenities.splice(0, springToFind.amenities.length)
    await springToFind.save();

    res.status(200).send({message: "Amenities deleted successfully"})
    } catch (err) {
        res.status(400).send(err)
    }
});

router.post('/amenityTypeChoices', async (req, res) => {
    try {
        for (var i = 0; i < req.body.List.length; i++) {
            await amenityTypeChoices.create(req.body.List[i])
        };
        const amenitiesList = await amenityTypeChoices.find({})

        res.status(200).send(amenitiesList)
    } catch (err) {
        res.status(400).send(err)
    }
})





module.exports = router;