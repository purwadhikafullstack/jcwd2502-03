const router = require("express").Router();
const {warehouseController} = require("../controllers")
const adminMiddleware = require("../middlewares/adminMiddleware")

router.post("/",adminMiddleware, warehouseController.addWarehouse)
router.delete("/:id", warehouseController.deleteWarehouse)
router.delete("/restore/:id", warehouseController.restoreWarehouse)
router.get("/", warehouseController.getAllWarehouse)
router.put("/", warehouseController.updateWarehouse)

module.exports = router