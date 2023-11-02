const categoryService = require("../services/categoryService");
const db = require("../models");
const productService = require("../services/productService");

module.exports = {

  allKategori : async (req, res, next) => {
    try {
        const data = await categoryService.getAllCategory(req.query)
        res.send(data);
    } catch (error) {
        next(error)
    }
  },

  createKategori : async (req, res, next) => {
    try {
      await categoryService.createKategori(JSON.parse(req.body.data), req.files)
      res.status(200).send({
        isError: false,
        message: "Success Create Category",
        data: null,
      });
    } catch (error) {
      next(error)
    }
  },

  updateKategori : async (req, res, next) => {
    try {
      await categoryService.updateKategori(req.params, req.body)
      res.status(200).send({
        isError: false,
        message: "Success Update",
        data: null,
      });
    } catch (error) {
      next(error)
    }
  }

};
