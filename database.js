const mongoose = require('mongoose');
const connection = "mongodb+srv://james:Autumn9603news.doh4c.mongodb.net/news?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));