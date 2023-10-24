const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");

router.post("/cart", authorizeLoggedInUser, orderController.addToCart);
router.post("/cartdata", authorizeLoggedInUser, orderController.getCartData);
router.post("/delete-cart",authorizeLoggedInUser,  orderController.deleteProductCart);
router.post("/update-quantity", authorizeLoggedInUser, orderController.updateQuantityCart);
router.post("/place-order", authorizeLoggedInUser, orderController.placementOrder);

module.exports = router;
