const { sequelize } = require("../models");
const db = require("../models");

module.exports = {
  getStockWhere: async (warehouses_id, products_id, stock) => {
    try {
        // console.log(warehouses_id);
      const data = await db.products_stocks.findOne({
        where: {
          warehouses_id,
          products_id,
        },
      });
    //   console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  },
};
