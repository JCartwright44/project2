module.exports = function(sequelize, DataTypes) {
    var Owners = sequelize.define("owners", {
        ownerId: DataTypes.INTEGER,
        userName: DataTypes.STRING,
        passKey: DataTypes.STRING,
        avatar: DataTypes.STRING,
        leagueID: DataTypes.INTEGER,
        teamID: DataTypes.INTEGER
      });
    return Owners;
  };
  