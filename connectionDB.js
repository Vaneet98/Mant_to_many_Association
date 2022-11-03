const Sequelize = require("Sequelize");
const sequelize = new Sequelize("oneTo", "root", "Vaneet5509@", {
  host: "localhost",
  dialect: "mysql",
  port: "3307",
  logging: console.log,
});

const connect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

const syn = () => {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Sync");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
module.exports = {
  sequelize: sequelize,
  connect: connect,
  syn: syn,
};
