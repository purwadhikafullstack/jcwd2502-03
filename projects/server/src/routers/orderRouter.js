const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");

router.post("/cart", authorizeLoggedInUser, orderController.addToCart);
router.post("/dataCart", authorizeLoggedInUser, orderController.getCartData);

module.exports = router;
