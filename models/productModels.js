const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connectionDB").sequelize;

const product = sequelize.define(
  "pro",
  {
    prodcutNames: {
      type: DataTypes.STRING,
    },
    prodcutPrices: {
      type: DataTypes.INTEGER,
    },
    oneuserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        col: "id",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,

  }
);

module.exports = product;
