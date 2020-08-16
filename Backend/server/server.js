var express = require('express');
var app = express();
var path = require('path');
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');
var auth = require('./auth/routes');
const { static } = require('express');

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);
if (config.seed) {
  require('./util/seed');
}
// setup the app middlware
require('./middleware/appMiddlware')(app);


// setup the api
app.use('/api', api); 
app.use('/auth', auth);
// set up global error handling




// app.use(express.static(path.join(__dirname, "../../blog/build")));
 // this middleware we can serve all JavaScript, CSS, HTML, and even images.


app.use(express.static(path.join(__dirname, "../../blog/build")));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../blog/build', 'index.html'));
});



app.use(function(err, req, res, next) {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send('Oops');
});

// export the app for testing
module.exports = app;
