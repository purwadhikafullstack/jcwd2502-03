const db = require("./../models");
const { Op, sequelize } = require("./../models");
const moment = require("moment");
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
      s;
    }
  },
  getProductById: async (productId) => {
    console.log(productId);
    try {
      const getProduct = await db.products.findOne({
        where: { id: productId },
        include: [
          {
            model: db.products_stocks,
            attributes: ["stock"],
          },
        ],
      });
      return getProduct;
    } catch (error) {
      return error;
    }
  },
  addQuantityIfIdExist: async (data, qty) => {
    try {
      const add = db.carts.update(
        {
          quantity: sequelize.literal(`quantity + ${qty}`),
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
          [db.Sequelize.literal("quantity * product_weight"), "total-weight"],
        ],
        include: [
          {
            model: db.products,
            attributes: ["product_name", "product_price"],
            where: { product_status: "Active" },
            include: [
              {
                model: db.products_images,
                attributes: ["image"],
              },
              {
                model: db.products_stocks,
                attributes: ["stock"],
                include: [
                  {
                    model: db.warehouses,
                    attributes: ["name", "id"],
                  },
                ],
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
  placementOrder: async (data) => {
    try {
      const placeOrder = await db.orders_details.bulkCreate(data);

      return placeOrder;
    } catch (error) {
      return error;
    }
  },
  updateUid: async (createdAt, formattedCreatedAt) => {
    try {
      const updateUid = await db.orders_details.update(
        {
          transaction_uid: formattedCreatedAt,
        },
        { where: { createdAt: createdAt } }
      );

      return updateUid;
    } catch (error) {
      return error;
    }
  },
  getAddessByUserId: async (data) => {
    try {
      const getAddress = await db.users_addresses.findAll(
        {
          include: [
            {
              model: db.tb_ro_cities,
              attributes: ["city_name", "postal_code", "provinces_id"],
              include: [
                {
                  model: db.tb_ro_provinces,
                  attributes: ["province_name"],
                },
              ],
            },
          ],
        },
        {
          where: { users_id: data },
        }
      );
      return getAddress;
    } catch (error) {
      return error;
    }
  },
  getAddressByPrimaryKey: async (data) => {
    try {
      const getAddressByPrimaryKey = await db.users_addresses.findOne(
        {
          include: [
            {
              model: db.tb_ro_cities,
              attributes: ["city_name", "postal_code", "provinces_id"],
              include: [
                {
                  model: db.tb_ro_provinces,
                  attributes: ["province_name"],
                },
              ],
            },
          ],
        },
        {
          where: { users_id: data.id, is_primary: data.primary },
        }
      );
      return getAddressByPrimaryKey;
    } catch (error) {
      return error;
    }
  },
  getRajaOngkir: async (data) => {
    try {
      const getRajaOngkir = await db.tb_ro_provinces.findAll({
        include: [
          {
            model: db.tb_ro_cities,
            attributes: ["city_id", "city_name"],
          },
        ],
      });
      return getRajaOngkir;
    } catch (error) {
      return error;
    }
  },
  paymentMethod: async () => {
    try {
      const getPaymentMethod = await db.payment_methods.findAll();

      return getPaymentMethod;
    } catch (error) {
      return error;
    }
  },
  couriers: async () => {
    try {
      const getCouriers = await db.couriers.findAll();
      return getCouriers;
    } catch (error) {
      return error;
    }
  },
  addAddressById: async (data) => {
    try {
      const addAddress = await db.users_addresses.create(data);
      return addAddress;
    } catch (error) {
      return error;
    }
  },
  editAddress: async (data, idAddress, id) => {
    try {
      const editAddress = await db.users_addresses.update(data, {
        where: { id: idAddress, users_id: id },
      });
      return editAddress;
    } catch (error) {
      return error;
    }
  },
  getUserData: async(id) => {
    try {
      const getUser  = await db.users.findByPk(id)
      return getUser
    } catch (error) {
      return error 
    }
  }
};
