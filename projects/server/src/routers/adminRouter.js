const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { ownerMiddleware } = require("../middlewares/ownerMiddleware");

router.get("/users", ownerMiddleware, adminController.getAllUsers);
router.get("/warehouses/:warehouses_id", ownerMiddleware, adminController.getWarehouseData);
router.patch("/edit-users", ownerMiddleware, adminController.editAllUser);
router.delete("/delete-user/:users_id", ownerMiddleware, adminController.deleteUser);
router.get("/user/:users_id", ownerMiddleware, adminController.getUserData);
router.get("/histories", ownerMiddleware, adminController.getStockHistories);

module.exports = router;
