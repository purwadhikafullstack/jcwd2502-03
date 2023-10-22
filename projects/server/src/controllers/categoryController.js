const categoryService = require("../services/categoryService");
const db = require("../models")

module.exports = {

  allKategori : async (req, res, next) => {
    try {
        const data = await categoryService.getAllCategory(req.query)
        res.send(data);
    } catch (error) {
        next(error)
    }
  },



};
