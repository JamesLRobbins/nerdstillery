/////////////////

const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://james:Autumn9603@news.doh4c.mongodb.net/news?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const cors = require('cors');
const bodyParser = require('body-parser');
const isDev = process.env.NODE_ENV !== 'production';
const path = require('path');

const config = require('../config/config');

mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

// API calls
app.use('/api', require('./routes/news'))
app.use('/api', require('./routes/image'))

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

