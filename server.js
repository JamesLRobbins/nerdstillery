// /////////////////

// const express = require('express');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://james:Autumn9603@news.doh4c.mongodb.net/news?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.set("port", PORT)

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
// app.use(cors());

// // API calls
// app.use('/api', require('./routes/news'))
// app.use('/api', require('./routes/image'))

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// app.listen(process.env.PORT || 5000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://james:Autumn9603@news.doh4c.mongodb.net/news?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./server/routes/news'))
app.use('/api', require('./server/routes/image'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
// Serve static files from the React app
// app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
