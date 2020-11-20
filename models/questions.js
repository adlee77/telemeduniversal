module.exports = function (sequelize, DataTypes) {
    var Support = sequelize.define('Support', {
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
    return Support
  }
  