const db = require("./../models");
const { Op, sequelize } = require("./../models");
module.exports = {
  addTocart: async (data) => {
    try {
      const addToCart = await db.carts.create(data);
      return addToCart;
    } catch (error) {
      return error;
    }
  },
  getCartByProductId: async (data) => {
    try {
      const getCart = await db.carts.findOne({
        where: { products_id: data.productId, users_id: data.userId },
      });

      return getCart;
    } catch (error) {
      return error;
    }
  },
  addQuantityIfIdExist: async (data) => {
    try {
      const add = db.carts.update(
        {
          quantity: sequelize.literal("quantity + 1"),
        },
        { where: { products_id: data } }
      );

      return add;
    } catch (error) {
      return error;
    }
  },
  getCartByUserId: async (data) => {
    try {
      const getCart = await db.carts.findAll({
        include: [
          {
            model: db.products,
            attributes: ["product_name", "product_price", "product_weight"],
            where: { product_status: "Active" },
            include: [
              {
                model: db.products_images,
                attributes: ["image"],
              },
            ],
          },
        ],
        where: { users_id: data },
      });
      return getCart;
    } catch (error) {
      return error;
    }
  },
};
