var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Load Dashboard page
  app.get("/dashboard", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("dashboard", {
        msg: "Welcome!",
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
