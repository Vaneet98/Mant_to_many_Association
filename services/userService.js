const Models = require("../models");

exports.addUser = (data) => {
  return Models.UserModels.create(data);
};
