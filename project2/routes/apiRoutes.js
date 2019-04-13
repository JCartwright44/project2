var db = require("../models");
var connection = require("../config/connection.js");

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

  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM messages";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  //////////////////////////////////////////////////////////////////////

  app.put("/api/newplayer", function(req, res) {
    db.Teams.update(req.body, {
      where: {
        ownerID: req.body.id
      }
    }).then(function(dbTeams) {
      res.json(dbTeams);
    });
  });

  app.post("/api/new", function(req, res) {
    console.log("Message Data:");
    console.log(req.body);

    var dbQuery =
      "INSERT INTO messages (author, message, created_at) VALUES (?,?,?)";

    connection.query(
      dbQuery,
      [req.body.author, req.body.body, req.body.created_at],
      function(err, result) {
        if (err) throw err;
        console.log("Message Successfully Saved!");
        res.end();
      }
    );
  });
};
