var exphbs = require('express-handlebars');
const express = require('express')
const methodOverride = require('method-override')
const app = express()
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notes-tm');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/rotten-potatoes', {useMongoClient: true});
const bodyParser = require('body-parser');

const port = process.env.PORT || 27017;
app.listen(port);

app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
const reviews = require('./controllers/reviews')(app);
const comments = require('./controllers/comments')(app);
const Review = require('./models/review')



// app.listen(3000, () => {
//   console.log('App listening on port 3000!')
// })

// For Chai
module.exports = app;
