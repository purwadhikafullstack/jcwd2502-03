const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");

router.post("/cart", orderController.addToCart);
router.post("/dataCart", orderController.getCartData);
router.put("/increase", orderController.addQuantity);
router.put("/decreaseQty", orderController.decreaseQuantity);
router.post("/delete-cart", orderController.deleteProductCart);
router.post("/update-quantity", orderController.updateQuantityCart);

module.exports = router;
