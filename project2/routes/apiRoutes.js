var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // Create a new example
  app.post("/api/players", function(req, res) {
    db.Players.create(req.body).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
