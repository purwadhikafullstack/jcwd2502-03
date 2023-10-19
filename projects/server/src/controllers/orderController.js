const {
  addTocart,
  getCartByProductId,
  addQuantityIfIdExist,
} = require("./../services/orderService");

const orderController = {
  addToCart: async (req, res, next) => {
    try {
      const { productId, quantity } = req.body;
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
          quantity: quantity,
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
};

module.exports = orderController;
