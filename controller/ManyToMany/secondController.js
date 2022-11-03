const Service = require("C:/Users/vaneet kumar/Desktop/ExpressJS/OneToOneAndMany/services");

module.exports = {
    addsecond : async (data) => {
    let productData = {
      productName: data.productName,
      productPrice: data.productPrice,
    };
    let product = Service.ManytoMany.secondService.addsecond (productData);
    return product;
  },
};
