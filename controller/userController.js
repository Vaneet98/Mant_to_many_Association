const Service = require("../services");

module.exports = {
  addUser: async (data) => {
    let userData = {
      name: data.name,
      email: data.email,
      gender: data.gender,
      address: data.address,
    };
    let user = await Service.UserService.addUser(userData);
    return user;
  },
};
