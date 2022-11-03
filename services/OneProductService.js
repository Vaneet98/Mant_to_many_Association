const Models = require("../models");

exports.addProduct = (data) => {
  return Models.OneProductModels.create(data);
};
