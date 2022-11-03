const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connectionDB").sequelize;
const product = sequelize.define(
  "product",
  {
    productName: {
      type: DataTypes.STRING,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      set(value) {
        this.setDataValue("productPrice", value + ".00");
      },
    },
    userid: {
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
