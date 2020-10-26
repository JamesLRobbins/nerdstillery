const express = require('express');
const News = require('../models/News')
const router = express.Router();

router.get('/news', (req, res) => {
    News.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/news/:id', (req, res) => {
    News.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

router.delete('/news/:id', async (req, res)=> {
    await News.findByIdAndDelete(req.params.id)
    res.json({'message': 'deleted'})
})

router.post('/news', (req, res) => {
    news = new News({
        bandName: req.body.bandName,
        news: req.body.news,
        date: req.body.date
    })
    news.save(() => {
        res.json(news)
    })
})

router.put('/news/:id', async (req, res)=> {
    await News.findByIdAndUpdate(req.params.id, req.body)
    res.json({'message': 'updated'})
})
module.exports = router