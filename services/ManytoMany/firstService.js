const Models = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/models");

exports.addfirst = (data) => {
  return Models.ManytoMany.firstModels.create(data);
};
