const Service = require("../services");

module.exports = {
  addProductMany: async (data) => {
    let manyProductData = {
      productNames: data.productNames,
      productPrices: data.productPrices,
      manyUserId: data.manyUserId,
    };
    let product = Service.ManyProductService.addProductMany(manyProductData);
    return product;
  },
};
