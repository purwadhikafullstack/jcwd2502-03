const { deleteFiles } = require("../helper/deleteFile");
const db = require("./../models");
const { sequelize } = require("./../models");

module.exports = {
  getAllProduct: async ({ categori, sortBy, search, product_status }) => {
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
      if (product_status) where.product_status = product_status;
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

  getProductDetails: async ({ id }) => {
    try {
      const data = await db.products.findByPk(id);
      return data;
    } catch (error) {
      return error;
    }
  },

  updateProduct: async ({ id }, data) => {
    const t = await sequelize.transaction();
    try {
      const getProduct = await db.products.findByPk(id);
      const updateProduct = await db.products.update(
        {
          ...getProduct.dataValues,
          ...data,
        },
        {
          where: { id },
        }
      );
      return updateProduct;
    } catch (error) {
      return error;
    }
  },

  updateImage: async (id, files) => {
    try {
      const images = files.images[0].path;
      const getPath = await db.products_images.findByPk(id);
      // console.log(getPath.dataValues.image);
      const updateImage = await db.products_images.update(
        { image: images },
        { where: { id } }
      );
      await deleteFiles({
        images: [{ path: getPath.dataValues.image }],
      });

      const getDataImage = await db.products_images.findByPk(id);
      return getDataImage;
    } catch (error) {
      return error;
    }
  },

  updateStatus: async ({ id }) => {
    try {
      const product = await db.products.findByPk(id);
      const data = {};
      if (product.dataValues.product_status === "Active") {
        data["status"] = "Inactive";
      } else {
        data["status"] = "Active";
      }
      await db.products.update(
        {
          product_status: data.status,
        },
        {
          where: { id: id },
        }
      );

      const hasil = await db.products.findByPk(id);
      return hasil;
    } catch (error) {
      return error;
    }
  },

  deleteProduct: async ({ id }) => {
    try {
      await db.products.update(
        { status: "Inactive" },
        { where: { id } }
      );
      const res = await db.products.destroy({ where: { id } });
      return res;
    } catch (error) {
      return error;
    }
  },

  restoreProduct: async ({ id }) => {
    try {
      const res = await db.products.restore({ where: { id } });
      const update = await db.products.update(
        { status: "Active" },
        { where: { id } }
      );
      return res;
    } catch (error) {
      return error;
    }
  },
};
