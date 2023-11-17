const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");
const {customerMiddleware} = require("./../middlewares/customerMiddleware")
const upload1 = require("../middlewares/upload1");


router.post("/cart", authorizeLoggedInUser, orderController.addToCart);
router.post("/cartdata", authorizeLoggedInUser, orderController.getCartData);
router.post("/delete-cart",authorizeLoggedInUser,  orderController.deleteProductCart);
router.post("/update-quantity", authorizeLoggedInUser, orderController.updateQuantityCart);
router.put("/place-order", authorizeLoggedInUser, orderController.placementOrder);
router.post("/address", authorizeLoggedInUser, orderController.address);
router.post("/primary-address", authorizeLoggedInUser, orderController.primaryAddress);
router.get("/raja-ongkir-cities", orderController.getCityRajaOngkir);
router.get("/payments", orderController.paymentMethod);
router.get("/couriers", orderController.getCouriers);
router.post("/add-address",authorizeLoggedInUser, orderController.addAddress);
router.post("/edit-address",authorizeLoggedInUser, orderController.editAddress);
router.post("/shipping-method", orderController.getShippingMethod);
router.post("/user-data",authorizeLoggedInUser,  orderController.getUserData);
router.post("/filter-order",authorizeLoggedInUser,  orderController.filterOrder);
router.post("/order-details",authorizeLoggedInUser , customerMiddleware,  orderController.OrderDetailsByTransactionId);
router.post("/cancel-order",authorizeLoggedInUser , customerMiddleware,  orderController.cancelOrder);
router.put("/upload",authorizeLoggedInUser , customerMiddleware, upload1,  orderController.uploadPaymentAproval);
router.post("/status",authorizeLoggedInUser , customerMiddleware,  orderController.statusOrder);


module.exports = router;