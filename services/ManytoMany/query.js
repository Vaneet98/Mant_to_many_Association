const Models = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/models");

Models.ManytoMany.firstModels.belongsToMany(Models.ManytoMany.secondModels, {
  through: "commanModels",
});

Models.ManytoMany.secondModels.belongsToMany(Models.ManytoMany.firstModels, {
  through: "commanModels",
});

exports.getAllDetails = () => {
  return Models.ManytoMany.firstModels.findAll({
    attributes: ["id", "name", "address"],
    include: [
      {
        model: Models.ManytoMany.secondModels,
      },
    ],
  });
};
