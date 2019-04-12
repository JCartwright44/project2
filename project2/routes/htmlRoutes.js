var db = require("../models");
var authController = require('../controllers/authcontroller.js');
var express = require('express');
var router = express.Router();

module.exports = function(app, passport) {
  // Load index page
  app.get("/", function(req, res) {
    db.Players.findAll({}).then(function(Players) {
      res.render("signin", {
        msg: "Welcome!",
        examples: Players
      });
    });
  });
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/user',

      failureRedirect: '/signup'
  }
  ));
  app.get('/dashboard-owner',isLoggedIn, authController.dashboard);
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/signin');
  });
  app.post('/signin', passport.authenticate('local-signin', {
      successRedirect: '/user',

      failureRedirect: '/signin'
  }

));
app.get('/user', isLoggedIn, function(req, res){
  console.log(req.user)
  res.render('draftpage-owner', { username: req.user.email });
  });

  // Load Dashboard page
  app.get("/dashboard-owner", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
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
    var obj = {};
    db.Players.findAll({})
      .then(function(dbExamples) {
        obj.examples = dbExamples;
      })
      .then(function() {
        return db.Players.findOne({ where: { id: 3 } });
      })
      .then(function(onePlayer) {
        obj.onePlayer = onePlayer;
        console.log(obj);
        res.render("draftpage-owner", obj);
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
    db.Players.findAll({}).then(function(dbExamples) {
      res.render("draft", {
        msg: "Your draftpage",
        examples: dbExamples
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/players", function(req, res) {
    db.Players.findOne({ where: { id: req.params.id } }).then(function(
      dbPlayer
    ) {
      console.log("dbPlayer:", dbPlayer);
      res.render("Players", dbPlayer);
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