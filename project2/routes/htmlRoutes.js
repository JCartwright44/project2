var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(Players) {
      res.render("index", {
        msg: "Welcome!",
        examples: Players
      });
    });
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
        res.render("dashboard-owner", obj);
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
