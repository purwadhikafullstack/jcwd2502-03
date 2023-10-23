const db = require("./../models");

module.exports = {
  getAllCategory: async ({ category_status }) => {
    try {
        console.log(category_status);
      const where = {};
      if(category_status) where.category_status = category_status
      const allCategory = await db.products_categories.findAll({ where });
      console.log(allCategory);
      return allCategory
    } catch (error) {
      return error;
    }
  },

  
};
