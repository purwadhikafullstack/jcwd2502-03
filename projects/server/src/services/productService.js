const db = require("./../models");

module.exports = {
  getAllProduct: async ({categori, sortBy}) => {
    try {
        // perkondisian untuk sorBy
        let sortOrder = "ASC";
        if (sortBy === "high_to_low") {
          sortOrder = "DESC";
        }

        let id = null
        if (categori == "SmartPhone") {
            id = 1
          } else if (categori == "Laptop") {
            id = 2
          } else if (categori == "HeadPhone") {
            id = 3
          } else if (categori == "Accessories") {
            id = 4
          }

        const where = { 
        }

        if(categori) where.products_categories_id = id

      const allProduct = await db.products.findAll({
        where,
        includes : db.product_categories,
        order: [["product_price", sortOrder]],
      });
      return allProduct;
    } catch (error) {
      return error;
    }
  },
};
