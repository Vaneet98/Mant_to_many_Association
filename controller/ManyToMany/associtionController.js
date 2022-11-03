const Service = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/services");

module.exports = {
  getAllUser: async () => {
    let users = await Service.ManytoMany.query.getAllDetails();
    return users;
  },
};
