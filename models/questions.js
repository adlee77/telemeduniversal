module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define('Questions', {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT
    })
    return Questions
  }
  