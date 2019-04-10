var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Load Dashboard page
  app.get("/dashboard-owner", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("dashboard-owner", {
        msg: "Your dashboard",
        examples: dbExamples
      });
    });
  });

  app.get("/dashboard-commissioner", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("dashboard-commissioner", {
        msg: "Your dashboard",
        players: dbPlayers
      });
    });
  });

  app.get("/draftpage-owner", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("draftpage-owner", {
        msg: "Your draftpage",
        examples: dbExamples
      });
    });
  });

  app.get("/draftpage-commissioner", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("draftpage-commissioner", {
        msg: "Your draftpage",
        examples: dbExamples
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
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};