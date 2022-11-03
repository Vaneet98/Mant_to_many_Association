const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connectionDB").sequelize;

const ManyToMany = sequelize.define(
  "manyProduct",
  {
    productNames: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrices: {
      type: DataTypes.INTEGER,
      set(value) {
        this.setDataValue("productPrices", value + ".00");
      },
    },
    manyUserId: {
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

module.exports = ManyToMany;
