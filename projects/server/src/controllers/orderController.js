const {
  addTocart,
  getCartByProductId,
  addQuantityIfIdExist,
  getCartByUserId,
  deleteCart,
  getProductCartQty,
  updateQty,
  placementOrder,
  updateUid,
  getProductById,
  getAddessByUserId,
  getAddressByPrimaryKey,
  getRajaOngkir,
  paymentMethod,
  couriers,
  addAddressById,
  editAddress,
  getUserData,
  filterPaymentStatus,
  getWarehouseTerdekat2,
  createOrder,
  deleteCartProduct,
  orderByTransactionId,
  orderDetailsByTransactionId,
  cancelOrderByTransactionId,
} = require("./../services/orderService");
const { Op } = require("sequelize");
const sequelize = require("./../sequelizeInstance/sequelizeInstance");
const { getLatLong } = require("./../services/opencageService");
const { getShippingMethod } = require("./../services/rajaOngkirService");
const moment = require("moment");

const orderController = {
  addToCart: async (req, res, next) => {
    try {
      const { productId, quantity } = req.body;

      const { id } = req.tokens;

      const dataCart = await getCartByProductId({
        productId: productId,
        userId: id,
      });

      const getProductId = await getProductById(productId);

      if (getProductId.dataValues.products_stocks[0].stock <= 0) {
        throw { message: "Out of stock" };
      }

      if (dataCart) {
        const addQuantity = await addQuantityIfIdExist(productId, quantity);

        res.status(200).send({
          isError: false,
          message: `Quantity Added by ${quantity}`,
        });
      } else {
        const addCart = await addTocart({
          products_id: productId,
          users_id: id,
          quantity: quantity,
        });

        res.status(200).send({
          isError: false,
          message: "Add to cart success",
          data: dataCart,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  getCartData: async (req, res, next) => {
    try {
      const { id } = req.tokens;

      const dataCart = await getCartByUserId(id);

      const totalWeightForCart = dataCart.reduce((total, item) => {
        return Number(total) + Number(item.dataValues["total-weight"]);
      }, 0);

      res.status(200).send({
        isError: false,
        data: dataCart,
        totalWeight: totalWeightForCart,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteProductCart: async (req, res, next) => {
    const { productId } = req.body;
    const { id } = req.tokens;

    const destroy = await deleteCart({
      productId: productId,
      userId: id,
    });
    res.status(200).send({
      isError: false,
      message: "delete cart success",
    });
  },
  updateQuantityCart: async (req, res, next) => {
    try {
      const { quantity, productId } = req.body;
      const { id } = req.tokens;

      const updateQuantity = await updateQty({
        productId: productId,
        userId: id,
        quantity: quantity,
      });

      res.status(200).send({
        isError: false,
        message: "quantity updated",
        data: updateQuantity,
      });
    } catch (error) {
      next(error);
    }
  },
  placementOrder: async (req, res, next) => {
    try {
      const {
        cartProducts,
        weight,
        shippingType,
        delivery_fee,
        payment_method,
        courier,
        address_detail,
        warehouses_id,
        total_price,
        city_id
      } = req.body;
      const { id } = req.tokens;
      console.log(city_id);

      if (cartProducts.length === 0) throw { message: "Please add an item " };

      const result = await sequelize.transaction(async (t) => {
        const maps = cartProducts.map((value) => {
          return {
            quantity: value.quantity,
            product_price: value.total,
            transaction_uid: null,
            users_id: id,
            warehouses_id: value.product.products_stocks[0].warehouse.id,
            products_id: value.products_id,
          };
        });

        const placeOrder = await placementOrder(maps, { transaction: t });

        const formattedDate = moment(placeOrder[0].createdAt).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        const formattedTransactionUid = moment(
          formattedDate,
          "YYYY-MM-DD HH:mm:ss"
        ).format("YYYYMMDDHHmmss");

        const updateTransactionUid = await updateUid(
          formattedDate,
          `INV-${formattedTransactionUid}`,
          { transaction: t }
        );

        return `INV-${formattedTransactionUid}`;
      });

      const data = {
        total_price: total_price,
        transaction_uid: result,
        payment_methods_id: payment_method,
        total_weight: weight,
        shipping_type: shippingType,
        delivery_fee: delivery_fee,
        users_id: id,
        courier: courier,
        address_detail: address_detail,
        warehouses_id: warehouses_id,
        customer_cities_id: city_id
      };

      const order = await createOrder(data);

      const deleteCart = await deleteCartProduct(id);

      res.status(200).send({
        isError: false,
        message: "Congratulations! Your order has been successfully placed.",
        result: order,
      });
    } catch (error) {
      next(error);
    }
  },
  address: async (req, res, next) => {
    try {
      const { id } = req.tokens;
      const getAddress = await getAddessByUserId(id);
      console.log(getAddress);

      res.status(200).send({
        isError: false,
        data: getAddress,
        message: "Addresses found",
      });
    } catch (error) {
      next(error);
    }
  },
  primaryAddress: async (req, res, next) => {
    try {
      const { primary } = req.body;
      const { id } = req.tokens;

      const getAddress = await getAddressByPrimaryKey({
        id: id,
        primary: primary,
      });

      res.status(200).send({
        isError: false,
        data: getAddress,
        message: "Primary address found",
      });
    } catch (error) {
      next(error);
    }
  },
  getCityRajaOngkir: async (req, res, next) => {
    try {
      const getCityRajaOngkir = await getRajaOngkir();

      res.status(200).send({
        isError: false,
        data: getCityRajaOngkir,
        message: "Raja ongkir cities found",
      });
    } catch (error) {
      next(error);
    }
  },
  paymentMethod: async (req, res, next) => {
    try {
      const getPaymentMethod = await paymentMethod();

      res.status(200).send({
        isError: false,
        data: getPaymentMethod,
      });
    } catch (error) {
      next(error);
    }
  },
  getCouriers: async (req, res, next) => {
    try {
      const getCouriers = await couriers();

      res.status(200).send({
        isError: false,
        data: getCouriers,
      });
    } catch (error) {
      next(error);
    }
  },
  addAddress: async (req, res, next) => {
    try {
      const { id } = req.tokens;
      const { address, city } = req.body;

      if (!address) throw { message: "Fill Out The Address" };
      if (!city) throw { message: "Select The City" };

      const data = {
        address: address,
        cities_id: city,
        users_id: id,
      };

      const addAddress = await addAddressById(data);

      res.status(200).send({
        isError: false,
        data: addAddress,
        message: "Address Added",
      });
    } catch (error) {
      next(error);
    }
  },
  editAddress: async (req, res, next) => {
    try {
      const { id } = req.tokens;
      console.log(id);
      const { address, city, idAddress } = req.body;
      const dataToEdit = {
        address: address,
        cities_id: city,
      };

      if (!address) throw { message: "Fill Out The Address" };
      if (!city) throw { message: "Select The City" };

      const resultEdit = await editAddress(dataToEdit, idAddress, id);

      res.status(200).send({
        isError: false,
        message: "Edit Successfull",
      });
    } catch (error) {
      next(error);
    }
  },
  getShippingMethod: async (req, res, next) => {
    try {
      const { cities_id, weight, courier } = req.body;

      if (!courier) throw { message: "Select a Courier" };
      if (courier === "select a courier") throw { message: "Select a Courier" };

      const userAddressLatLong = await getLatLong(cities_id);
      const nearestWarehouse = await getWarehouseTerdekat2(userAddressLatLong);
      console.log(nearestWarehouse);
      const data = {
        userCity: cities_id.toString(),
        nearestWarehouse: nearestWarehouse.cities_id.toString(),
        weight: weight > 30000 ? 30000 : weight,
        courier: courier.toString(),
      };

      const getShipping = await getShippingMethod(data);

      res.status(200).send({
        isError: false,
        data: getShipping.rajaongkir.results,
        nearestWarehouse: nearestWarehouse,
      });
    } catch (error) {
      next(error);
    }
  },
  getUserData: async (req, res, next) => {
    try {
      const { id } = req.tokens;

      const dataUser = await getUserData(id);

      res.status(200).send({
        isError: false,
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  },
  filterOrder: async (req, res, next) => {
    try {
      const { id } = req.tokens;
      const filterOrders = await filterPaymentStatus(req.query, id);

      res.status(200).send({
        isError: false,
        data: filterOrders,
      });
    } catch (error) {
      next(error);
    }
  },
  OrderDetailsByTransactionId: async (req, res, next) => {
    try {
      const { transaction_uid } = req.body;
      const { id } = req.tokens;

      const order = await orderByTransactionId(transaction_uid, id);
      console.log(order);
      const orderDetails = await orderDetailsByTransactionId(
        transaction_uid,
        id
      );

      res.status(200).send({
        isError: false,
        order: order,
        orderDetails: orderDetails,
      });
    } catch (error) {
      next(error);
    }
  },
  cancelOrder: async (req, res, next) => {
    try {
      const { id } = req.tokens;
      const { transaction_uid } = req.body;

      const cancel = await cancelOrderByTransactionId(id, transaction_uid);

      res.send({
        isError: false,
        message: "The Order Has been Canceled",
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;
