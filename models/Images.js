const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const ImageSchema = new mongoose.Schema({
        cloudinaryLink: {
            type: String,
            required: true
        },
        catagory: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        }
    });

module.exports = mongoose.model('Images', ImageSchema)