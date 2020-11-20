module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define('Users', {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      address_1: DataTypes.TEXT,
      address_2: DataTypes.TEXT,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      zip_code: DataTypes.INTEGER,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      birthday: DataTypes.STRING
    })
    return Users
  }
  