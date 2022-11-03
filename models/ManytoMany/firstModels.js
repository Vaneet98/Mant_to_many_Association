const sequelize = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/connectionDB.js").sequelize;
const { Sequelize, DataTypes } = require("sequelize");
const firstuser = sequelize.define(
  "firstUser",
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
    freezeTableName: true,
  }
);
module.exports = firstuser;

