const db = require("./../models");

module.exports = {
  getAllProduct: async ({categori, sortBy}) => {
    try {
        // perkondisian untuk sorBy
        let sortOrder = "ASC";
        if (sortBy === "high_to_low") {
          sortOrder = "DESC";
        }

        const where = { 
        }

        if(categori) where.products_categories_id = categori

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
