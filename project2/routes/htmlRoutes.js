var db = require("../models");
var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
  // Load index page
  app.get("/", function(req, res) {
    db.Players.findAll({}).then(function(Players) {
      res.render("signup", {
        msg: "Welcome!",
        examples: Players
      });
    });
  });
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/dashboard-owner',

      failureRedirect: '/signup'
  }
  ));
  app.get('/dashboard-owner',isLoggedIn, authController.dashboard);
  app.get('/logout',authController.logout);
  app.post('/signin', passport.authenticate('local-signin', {
      successRedirect: '/dashboard-owner',

      failureRedirect: '/signin'
  }

));
  // Load Dashboard page
  app.get("/dashboard-owner", function(req, res) {
    db.owners.findAll({}).then(function(dbPlayers) {
      res.render("dashboard-owner", {
        msg: "Your dashboard",
        examples: dbPlayers
      });
    });
  });

  app.get("/dashboard-commissioner", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.render("dashboard-commissioner", {
        msg: "Your dashboard",
        examples: dbPlayers
      });
    });
  });

  app.get("/players", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.render("dashboard-commissioner", {
        msg: "Your dashboard",
        examples: dbPlayers
      });
    });
  });
  app.get("/draftpage-owner", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.render("draftpage-owner", {
        msg: "Your draftpage",
        examples: dbPlayers
      });
    });
  });

  app.get("/draftpage-commissioner", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.render("draftpage-commissioner", {
        msg: "Your draftpage",
        examples: dbPlayers
      });
    });
  });
  app.get("/draft", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("draft", {
        msg: "Your draftpage",
        examples: dbExamples
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/players", function(req, res) {
    db.Players.findOne({ where: { id: req.params.id } }).then(function(
      dbPlayers
    ) {
      res.render("Players", {
        example: dbPlayers
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
   
      return next();
       
  res.redirect('/signin');

}