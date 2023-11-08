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
  getUserData: async (id) => {
    try {
      const getUser = await db.users.findByPk(id);
      return getUser;
    } catch (error) {
      return error;
    }
  },
  filterPaymentStatus: async (query, id) => {
    try {
      // "Payment Pending",
      // "Waiting for Payment Approval",
      // "Order Process",
      // "Package Sent",
      // "Package Arrived",
      // "Order Completed",
      // "Order Canceled"
      //  "Payment Pending"
      // ,

      if (query.status === "") {
        const filterPaymentStatusOrder = await db.orders_details.findAll({
          attributes: [
            "id",
            "transaction_uid",
            "quantity",
            "status",
            "createdAt",
            "updatedAt",
            "users_id",
            [
              db.Sequelize.fn("sum", db.Sequelize.col("product_price")),
              "total_price",
            ],
          ],
          where: {
            users_id: id,
            transaction_uid: { [db.Sequelize.Op.like]: `%${query.search}%` },
          },
          raw: true,
          group: ["transaction_uid"],
          order: [["createdAt", "DESC"]],
        });

        return filterPaymentStatusOrder;
      }
      const filterPaymentStatusOrder = await db.orders_details.findAll({
        attributes: [
          "transaction_uid",
          "quantity",
          "status",
          "createdAt",
          "updatedAt",
          "users_id",
          [
            db.Sequelize.fn("sum", db.Sequelize.col("product_price")),
            "total_price",
          ],
        ],
        raw: true,
        where: {
          users_id: id,
          status: query.status,
          transaction_uid: { [db.Sequelize.Op.like]: `%${query.search}%` },
        },
        group: ["transaction_uid"],
        order: [["createdAt", "DESC"]],
      });
      return filterPaymentStatusOrder;
    } catch (error) {
      return error;
    }
  },
  getWarehouseTerdekat2: async (datas) => {
    try {
      const data = await db.warehouses.findAll();
      let nearestWarehouse = null;
      let nearestDistance = Infinity;
      function degToRad(deg) {
        return deg * (Math.PI / 180);
      }
      function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius bumi dalam kilometer
        const dLat = degToRad(lat2 - lat1);
        const dLon = degToRad(lon2 - lon1);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(degToRad(lat1)) *
            Math.cos(degToRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return Math.ceil(distance);
      }

      data.forEach((warehouse) => {
        const distance = calculateDistance(
          datas.lat,
          datas.lng,
          warehouse.lat,
          warehouse.lng
        );
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestWarehouse = warehouse;
        }
      });

      return nearestWarehouse;
    } catch (error) {
      return error;
    }
  },
  createOrder: async (data) => {
    try {
      const createOrder = await db.orders.create(data);
      return createOrder;
    } catch (error) {
      return error;
    }
  },
  deleteCartProduct: async (id) => {
    try {
      const deleteCart = await db.carts.destroy({ where: { users_id: id } });
      return deleteCart;
    } catch (error) {
      return error;
    }
  },
  orderByTransactionId: async (transaction_uid, id) => {
    try {
      const order = await db.orders.findOne({
        include: [
          {
            model: db.payment_methods,
            attributes: ["method"],
          },
          {
            model: db.users,
            attributes: ["fullname", "email"],
          },
          {
            model: db.tb_ro_cities,
            attributes: ["city_id", "city_name", "postal_code", "provinces_id"],
            include: [
              {
                model: db.tb_ro_provinces,
                attributes: ["province_name"],
              },
            ],
          },
        ],
        where: { transaction_uid: transaction_uid, users_id: id },
      });

      return order;
    } catch (error) {
      return error;
    }
  },
  orderDetailsByTransactionId: async (transaction_uid, id) => {
    try {
      const orderDetails = await db.orders_details.findAll({
        include: [
          {
            model: db.warehouses,
            attributes: ["name", "id"],
          },
          {
            model: db.products,
            attributes: ["id", "product_name", "product_price"],
            include: [
              {
                model: db.products_images,
                attributes: ["image"],
              },
            ],
          },
        ],
        where: { transaction_uid: transaction_uid, users_id: id },
      });
      

      return orderDetails;
    } catch (error) {
      return error;
    }
  },
};
