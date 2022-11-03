const Models = require("../models");

exports.addProductMany = (data) => {
  return Models.ManyProductModels.create(data);
};

