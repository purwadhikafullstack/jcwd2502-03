const {
  addTocart,
  getCartByProductId,
  addQuantityIfIdExist,
  getCartByUserId,
  increaseQty,
  deleteCart,
  decreaseQuantity,
  getProductCartQty,
  updateQty,
} = require("./../services/orderService");

const orderController = {
  addToCart: async (req, res, next) => {
    try {
      const { productId, userId } = req.body;
      // const { id } = req.tokens;

      const dataCart = await getCartByProductId({
        productId: productId,
        userId: userId,
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
          users_id: userId,
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
      // const { id } = req.tokens;
      const { userId } = req.body;

      const dataCart = await getCartByUserId(userId);
      console.log(dataCart);

      res.status(200).send({
        isError: false,
        data: dataCart,
      });
    } catch (error) {
      next(error);
    }
  },
  addQuantity: async (req, res, next) => {
    try {
      const { productId, userId } = req.body;

      const addQuantity = await increaseQty({
        productId: productId,
        userId: userId,
      });
      res.status(200).send({
        isError: false,
        message: "increase by 1 success",
      });
    } catch (error) {
      next(error);
    }
  },
  decreaseQuantity: async (req, res, next) => {
    try {
      const { productId, userId } = req.body;

      const decreases = await decreaseQuantity({
        productId: productId,
        userId: userId,
      });

      const qty = await getProductCartQty({
        productId: productId,
        userId: userId,
      });

      res.status(200).send({
        isError: false,
        message: "decrease by 1 success",
        quantity: qty.quantity,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteProductCart: async (req, res, next) => {
    const { productId, userId } = req.body;

    const destroy = await deleteCart({
      productId: productId,
      userId: userId,
    });
    res.status(200).send({
      isError: false,
      message: "delete cart success",
    });
  },
  updateQuantityCart: async (req, res, next) => {
    try {
      const { quantity, productId, userId } = req.body;

      const updateQuantity = await updateQty({
        productId: productId,
        userId: userId,
        quantity: quantity,
      });

      res.send(updateQuantity);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;
