const db = require("./../models");

module.exports = {
  getAllProduct: async ({ categori, sortBy, search }) => {
    try {
      // console.log(search);
      // perkondisian untuk sorBy
      let sortOrder = null;
      if (sortBy === "high_to_low") {
        sortOrder = "DESC";
      } else if (sortBy === "low_to_high") {
        sortOrder = "ASC";
      }
      const order = [];
      if (sortOrder) order.push(["product_price", sortOrder]);

      let id = null;
      if (categori == "SmartPhone") {
        id = 1;
      } else if (categori == "Laptop") {
        id = 2;
      } else if (categori == "HeadPhone") {
        id = 3;
      } else if (categori == "Accessories") {
        id = 4;
      }

      const where = {};

      if (categori) where.products_categories_id = id;
      if (search) {
        where.product_name = {
          [db.Sequelize.Op.like]: `%${search}%`,
        };
      }

      const allProduct = await db.products.findAll({
        where,
        includes: db.product_categories,
        order,
      });
      return allProduct;
    } catch (error) {
      return error;
    }
  },
};
