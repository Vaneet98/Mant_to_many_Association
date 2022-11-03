const Models = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/models");

exports.addcomman = (data) => {
  return Models.ManytoMany.commanModels.create(data);
};
