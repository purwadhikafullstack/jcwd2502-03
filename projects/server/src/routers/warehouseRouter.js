const router = require("express").Router();
const {warehouseController} = require("../controllers")
const {ownerMiddleware} = require("../middlewares/ownerMiddleware")
const {adminMiddleware} = require("../middlewares/adminMiddleware")

router.post("/",ownerMiddleware, warehouseController.addWarehouse)
router.delete("/:id",ownerMiddleware, warehouseController.deleteWarehouse)
router.delete("/restore/:id",ownerMiddleware, warehouseController.restoreWarehouse)
router.get("/", warehouseController.getAllWarehouse)
router.put("/",ownerMiddleware, warehouseController.updateWarehouse)
router.post("/nearest", warehouseController.getWarehouseTerdekat)

module.exports = router