const express = require('express');
const Images = require('../models/Images')
const router = express.Router();

router.get('/sid-images', (req, res) => {
    Images.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/sid-images/:id', (req, res) => {
    Images.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

router.delete('/sid-images/:id', async (req, res)=> {
    await Images.findByIdAndDelete(req.params.id)
    res.json({'message': 'deleted'})
})

router.post('/sid-images', (req, res) => {
    images = new Images({
        cloudinaryLink: req.body.cloudinaryLink,
        catagory: req.body.catagory,
        model: req.body.model
    })
    images.save(() => {
        res.json(images)
    })
})

router.put('/sid-images/:id', async (req, res)=> {
    await Images.findByIdAndUpdate(req.params.id, req.body)
    res.json({'message': 'updated'})
})
module.exports = router