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
} = require("./../services/orderService");

const moment = require("moment");

const orderController = {
  addToCart: async (req, res, next) => {
    try {
      const { productId } = req.body;

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
        const addQuantity = await addQuantityIfIdExist(productId);

        res.status(200).send({
          isError: false,
          message: "Quantity Added by 1",
        });
      } else {
        const addCart = await addTocart({
          products_id: productId,
          users_id: id,
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

      res.status(200).send({
        isError: false,
        data: dataCart,
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
      const { cartProducts } = req.body;

      const { id } = req.tokens;

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

      const placeOrder = await placementOrder(maps);

      const formattedDate = moment(placeOrder[0].createdAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );

      const formattedTransactionUid = moment(
        formattedDate,
        "YYYY-MM-DD HH:mm:ss"
      ).format("YYYYMMDDHHmmss");

      const updateTransactionUid = await updateUid(
        formattedDate,
        formattedTransactionUid
      );

      res.status(200).send({
        isError: false,
        message: "Congratulations! Your order has been successfully placed.",
        placementOrder: placeOrder,
        transaction_uid: formattedTransactionUid,
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
};

module.exports = orderController;
