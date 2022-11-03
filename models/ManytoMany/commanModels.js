const { Sequelize, DataTypes } = require("sequelize");

const sequelize =
  require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/connectionDB.js").sequelize;

const comman = sequelize.define(
  "commanModels",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstId: {
      type: DataTypes.INTEGER,
      references: {
        model: "firstUser",
        col: "id",
      },
    },
    secondId: {
      type: DataTypes.INTEGER,
      references: {
        model: "SecondModels",
        col: "id",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = comman;
