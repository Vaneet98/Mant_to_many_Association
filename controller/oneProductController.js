const Service = require("../services");

module.exports = {
  addProduct: async (data) => {
    let productData = {
      productNames: data.productNames,
      productPrices: data.productPrices,
      oneuserId: data.oneuserId,
    };
    let product = Service.OneProductServie.addProduct(productData);
    return product;
  },
};
