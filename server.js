require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var env = require('dotenv');
var db = require("./models");

var app = express();
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 9000;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));// session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Models
var models = require("./models");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app, passport);
// var authRoute = require('./routes/auth')(app, passport);

var syncOptions = { force: false };

//load passport strategies
require('./config/passport/passport')(passport, models.owners);

//Sync Database
models.sequelize.sync().then(function() {
console.log('Nice! Database looks fine')
}).catch(function(err) {
console.log(err, "Something went wrong with the Database Update!")
});

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
