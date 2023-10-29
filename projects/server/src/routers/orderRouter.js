const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");

router.post("/cart", authorizeLoggedInUser, orderController.addToCart);
router.post("/cartdata", authorizeLoggedInUser, orderController.getCartData);
router.post("/delete-cart",authorizeLoggedInUser,  orderController.deleteProductCart);
router.post("/update-quantity", authorizeLoggedInUser, orderController.updateQuantityCart);
router.post("/place-order", authorizeLoggedInUser, orderController.placementOrder);
router.post("/address", authorizeLoggedInUser, orderController.address);
router.post("/primary-address", authorizeLoggedInUser, orderController.primaryAddress);
router.get("/raja-ongkir-cities", orderController.getCityRajaOngkir);
router.get("/payments", orderController.paymentMethod);
router.get("/couriers", orderController.getCouriers);
router.post("/add-address",authorizeLoggedInUser, orderController.addAddress);
router.post("/edit-address",authorizeLoggedInUser, orderController.editAddress);


module.exports = router;
