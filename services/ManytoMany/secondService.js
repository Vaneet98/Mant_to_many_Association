const Models = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/models");

exports.addsecond = (data) => {
  return Models.ManytoMany.secondModels.create(data);
};
