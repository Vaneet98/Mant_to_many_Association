const Service = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/services");

module.exports = {
    addfirst : async (data) => {
    let userData = {
      name: data.name,
      email: data.email,
      gender: data.gender,
      address: data.address,
    };
    let user = await Service.ManytoMany.firstService.addfirst (userData);
    return user;
  },
};
