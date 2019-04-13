var db = require("../models");
var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
  // Load index page
  app.get("/", function (req, res) {
    db.Players.findAll({}).then(function (Players) {
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
  app.get('/dashboard-owner', isLoggedIn, authController.dashboard);
  app.get('/logout', authController.logout);
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/draftpage-owner',

    failureRedirect: '/signin'
  }

  ));
  // Load Dashboard page
  app.get("/dashboard-owner", function (req, res) {
    var obj = {};
    db.Players.findAll({ limit: 15 })
      .then(function (dbExamples) {
        obj.examples = dbExamples;
      })
      .then(function () {
        return db.Players.findAll({ where: { id: 17 } });
      })
      .then(function (onePlayer) {
        obj.onePlayer = onePlayer;
        res.render("draftpage-owner", obj);
      });
  });

  app.get("/dashboard-commissioner", function (req, res) {
    var ownObj = {};
    db.Teams.findAll({})
      .then(function (dbTeams) {
        ownObj.Teams = dbTeams;
      })
      .then(function () {
        return db.Teams.findAll({ where: { teamID: 1 } });
      })
      .then(function (teamRos) {
        ownObj.teamRos = teamRos;
        res.render("dashboard-commissioner", ownObj);
      });
  });


  app.get("/players", function (req, res) {
    db.Players.findAll({})
      .then(function (dbPlayers) {
        res.render("Players", {
          msg: "Players",
          examples: dbPlayers
        });
      });
  });

  app.get("/draftpage-owner", function (req, res) {
    var playersObj = {};
    console.log("User", req.user)
    var playerPromise = db.Players.findAll({ limit: 15 })
      .then(function (dbExamples) {
        playersObj.examples = dbExamples;
      })
      .then(function () {
        return db.Players.findAll({ where: { id: 3 } });
      })

      .then(function (onePlayer) {
        playersObj.onePlayer = onePlayer;
        
      });
      var ownObj = {};
      var ownerPromise = db.owners.findAll({})
        .then(function (dbOwners) {
          ownObj.owners = dbOwners;
        })
        .then(function () {
          return db.owners.findAll({ where: { id: req.user ? req.user.id : 1 } });
        })
        .then(function (teamRos) {
          ownObj.teamRos = teamRos;
        });

      // var draftObj = {};
      // var playerPromise = db.Players.findAll({})
      // var ownerPromise = db.owners.findAll({})
      //   .then(function (dbPlayers) {
      //     draftObj.Players = dbPlayers;
      //   })
      //   .then(function () {
      //     return db.Players.findAll({ where: {id: 1 } });
      //   })
      //   .then(function (dbOwners) {
      //     ownObj.owners = dbOwners;
      //   })
      //   .then(function (draftPlayer) {
      //     ownObj.teamRos = teamRos;
          

      //   });
        Promise.all([playerPromise, ownerPromise]).then(function(){
          console.log("Promise fulfilled")
          console.log("playerObj:",playersObj);
          console.log("ownerObj:",ownObj);
          res.render("draftpage-owner", {players: playersObj, owner: ownObj});
        })
  });

  app.get("/draftpage-commissioner", function (req, res) {
    var ownObj = {};
    db.owners.findAll({})
      .then(function (dbOwners) {
        ownObj.owners = dbOwners;
      })
      .then(function () {
        return db.owners.findAll({ where: { id: 1 } });
      })
      .then(function (teamRos) {
        ownObj.teamRos = teamRos;
        res.render("draftpage-commissioner", ownObj);
      });
  });

  // app.get("/draftpage-commissioner", function (req, res) {
  //   db.Players.findAll({}).then(function (dbPlayers) {
  //     res.render("draftpage-commissioner", {
  //       msg: "Your draftpage",
  //       examples: dbPlayers
  //     });
  //   });
  // });
  app.get("/draft", function (req, res) {
    db.Players.findAll({}).then(function (dbExamples) {
      res.render("draft", {
        msg: "Your draftpage",
        examples: dbExamples
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/players", function (req, res) {
    db.Players.findOne({ where: { id: req.params.id } }).then(function (
      dbPlayer
    ) {
      console.log("dbPlayer:", dbPlayer);
      res.render("Players", dbPlayer);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())

    return next();

  res.redirect('/signin');

}
