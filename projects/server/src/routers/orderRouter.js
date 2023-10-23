const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");

router.post("/cart", authorizeLoggedInUser, orderController.addToCart);
router.post("/dataCart", authorizeLoggedInUser, orderController.getCartData);
router.post("/delete-cart",authorizeLoggedInUser,  orderController.deleteProductCart);
router.post("/update-quantity", authorizeLoggedInUser, orderController.updateQuantityCart);

module.exports = router;
