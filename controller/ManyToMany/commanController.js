const Service = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/services");

module.exports = {
  addcomman: async (data) => {
    let manyProductData = {
      firstId: data.firstId,
      secondId: data.secondId,
    };
    let product = Service.ManytoMany.commanService.addcomman(manyProductData);
    return product;
  },
};
