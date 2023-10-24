const {
  addTocart,
  getCartByProductId,
  addQuantityIfIdExist,
  getCartByUserId,
  deleteCart,
  getProductCartQty,
  updateQty,
  placementOrder,
} = require("./../services/orderService");

const orderController = {
  addToCart: async (req, res, next) => {
    try {
      const { productId } = req.body;

      const { id } = req.tokens;

      const dataCart = await getCartByProductId({
        productId: productId,
        userId: id,
      });

      // console.log(dataCart);

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
      const { quantity, product_price, warehouses_id, products_id } = req.body;

      const { id } = req.tokens;
      console.log(id);
      const data = {
        quantity: quantity,
        product_price: product_price,
        transaction_uid: null,
        users_id: id,
        warehouses_id: warehouses_id,
        products_id: products_id,
      };

      const placeOrder = await placementOrder(data);

      res.send(placeOrder)
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;
