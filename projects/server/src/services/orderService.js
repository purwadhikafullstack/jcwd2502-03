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
        attributes: [
          "quantity",
          "products_id",
          [db.Sequelize.literal("quantity * product_price"), "total"],
        ],
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
  deleteCart: async (data) => {
    try {
      const deleted = await db.carts.destroy({
        where: { products_id: data.productId, users_id: data.userId },
      });
      return deleted;
    } catch (error) {
      return error;
    }
  },
  getProductCartQty: async (data) => {
    try {
      const getQty = await db.carts.findOne({
        where: { products_id: data.productId, users_id: data.userId },
      });
      return getQty;
    } catch (error) {
      return error;
    }
  },
  updateQty: async (data) => {
    try {
      const update = await db.carts.update(
        { quantity: data.quantity },
        {
          where: { products_id: data.productId, users_id: data.userId },
        }
      );
    } catch (error) {
      return error;
    }
  },
  placementOrder: async(data) => {
    try {
      const placeOrder = await db.order_details.bulkCreate(data)
      return placeOrder
    } catch (error) {
      return error
    }
  }
};
