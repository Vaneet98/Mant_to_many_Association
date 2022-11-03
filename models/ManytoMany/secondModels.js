const { Sequelize, DataTypes } = require("sequelize");

const sequelize =
  require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/connectionDB.js").sequelize;

const secondproduct = sequelize.define(
  "SecondModels",
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      set(value) {
        this.setDataValue("productPrice", value + ".00");
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = secondproduct;
