const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");

router.post("/cart", authorizeLoggedInUser, orderController.addToCart);
router.post("/dataCart", orderController.getCartData);
router.post("/delete-cart", orderController.deleteProductCart);
router.post("/update-quantity", orderController.updateQuantityCart);

module.exports = router;
