const { where } = require("sequelize");
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

  getAllStock: async ({ warehouses_id, products_id, search }) => {
    try {
      const where = {
        product: {},
        warehouses: {},
      };
      if (warehouses_id) where.warehouses = warehouses_id;
      if (products_id) where.product.products_id = products_id;
      if (search) {
        where.product.product_name = {
          [db.Sequelize.Op.like]: `%${search}%`,
        };
      }
      //   console.log(warehouses_id);
      const allProduct = await db.products_stocks.findAll({
        attributes: [
          "id",
          "stock",
          // [sequelize.col("product_name"), "product_name"],
          // [sequelize.col("product_description"), "product_description"],
          // [sequelize.col("product_price"), "product_price"],
          // [sequelize.col("product_weight"), "product_weight"],
          [sequelize.col("name"), "warehouses_name"],
          [sequelize.col("city_name"), "city_name"],
        ],
        include: [
          {
            model: db.products,
            attributes: [
              "id",
              "product_weight",
              "product_price",
              "product_description",
              "product_name",
            ],
          },
          {
            model: db.warehouses,
            attributes: [],
            include: [
              {
                model: db.tb_ro_cities,
                attributes: [],
              },
            ],
            where: where.warehouses,
          },
        ],
        where: where.product,
      });
      const totalStock = {};

      allProduct.forEach((item) => {
        const stock = item.stock;

        if (totalStock["total_stock"]) {
          totalStock["total_stock"] += stock;
        } else {
          totalStock["total_stock"] = stock;
        }
      });
      allProduct.unshift(totalStock);
      return allProduct;
    } catch (error) {
      return error;
    }
  },

  totalProductStock: async ({ products_id, search }) => {
    try {
      const where = {
        product: {},
      };
      if (products_id) where.product.products_id = products_id;
      if (search) {
        where.product.product_name = {
          [db.Sequelize.Op.like]: `%${search}%`,
        };
      }
      const allProduct = await db.products_stocks.findAll({
        attributes: [
          "id",
          [sequelize.fn("SUM", sequelize.col("stock")), "total_stock"],
        ],
        include: [
          {
            model: db.products,
            attributes: [
              "id",
              "product_weight",
              "product_price",
              "product_description",
              "product_name",
            ],
            where: where.product,
          },
        ],
        group: ["product.id"],
      });
      return allProduct;
    } catch (error) {
      return error;
    }
  },

  kurangiStock : async ({warehouses_id, products_id, quantity}) => {
    try {
        const dataStock = await db.products_stocks.findOne({where : {warehouses_id, products_id}})
        const editStock = await db.products_stocks.update(
            {
                ...dataStock.dataValues, stock : dataStock.dataValues.stock - quantity
            }, 
            {
                where : {id : dataStock.dataValues.id}
            }
        )
        return editStock
    } catch (error) {
        return(error)
    }
  },

  tambahStock : async ({warehouses_id, products_id, quantity}) => {
    try {
        const dataStock = await db.products_stocks.findOne({where : {warehouses_id, products_id}})
        const editStock = await db.products_stocks.update(
            {
                ...dataStock.dataValues, stock : dataStock.dataValues.stock + quantity
            }, 
            {
                where : {id : dataStock.dataValues.id}
            }
        )
        return editStock
    } catch (error) {
        return(error)
    }
  },

};
