const sequelize = require("../connectionDB").sequelize;
const { Sequelize, DataTypes } = require("sequelize");
const user = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue("email", value + "@gmail.com");
      },
      validator: {
        isEmail: true,
        len: [2, 30],
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "users",
  }
);
module.exports = user;
