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

  createKategori : async (data, file ) => {
    try {
      const dataImage = file.images.map((value) => {
        return { category_image: value.path };
      });
      const createProduk = await db.products_categories.create({
        ...data,
        category_status: "Active",
        category_image: dataImage[0].category_image,
      });
      return createProduk
    } catch (error) {
      return error
    }
  },

  updateKategori : async ({id}, data) => {
    try {
      const dataKategori = await db.products_categories.findByPk(id)
      console.log(dataKategori.dataValues);
      const update = await db.products_categories.update(
        {
          ...dataKategori, ...data
        },
        {where : {id}}
      )
      return update
    } catch (error) {
      return error
    }
  }

};
