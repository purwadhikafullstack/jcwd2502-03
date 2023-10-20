const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");

router.get("/cart", authorizeLoggedInUser, orderController.addToCart);

module.exports = router;
