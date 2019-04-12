module.exports = function(sequelize, DataTypes) {
  var Teams = sequelize.define("Teams", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    teamName: {
      type: DataTypes.STRING
    },
    leagueID: {
      type: DataTypes.INTEGER
    },
    playerTaken: {
      type: DataTypes.STRING
    },
    roundTaken: {
      type: DataTypes.INTEGER
    },
    ownerID: {
      type: DataTypes.INTEGER
    }
  });
  return Teams;
};
