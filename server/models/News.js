const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const NewsSchema = new mongoose.Schema({
        bandName: {
            type: String,
            required: true
        },
        news: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    });

module.exports = mongoose.model('News', NewsSchema)