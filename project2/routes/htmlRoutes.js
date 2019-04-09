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
  app.get("*", function (req, res) {
    res.render("404");
  });
};