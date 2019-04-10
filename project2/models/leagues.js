module.exports = function(sequelize, DataTypes) {
  var Leagues = sequelize.define("Leagues", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Leagues;
};
