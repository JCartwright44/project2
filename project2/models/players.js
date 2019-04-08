module.exports = function(sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
      playerName: DataTypes.STRING,
      pos: DataTypes.STRING,
      college: DataTypes.STRING,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      adp: DataTypes.INTEGER
    });
    return Players;
  };
  