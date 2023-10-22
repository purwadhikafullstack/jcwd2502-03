const productService = require("../services/productService");
const db = require("../models")

module.exports = {
  allProduct: async (req, res, next) => {
    try {
      //const { categori, sortBy } = req.query;
      const data = await productService.getAllProduct(req.query);
      res.send(data);
    } catch (error) {
      next(error);
    }
  },

  productDetail : async (req, res, next) => {
    try {
        const data = await productService.getProductDetails(req.params)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
  } 

};
