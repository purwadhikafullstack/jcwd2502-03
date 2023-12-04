const router = require("express").Router();
const {stockController} = require("../controllers")

router.get("/", stockController.allStock);
router.get("/:id", stockController.allStock);
router.get("/total", stockController.totalStockProduct);
router.put("/tambah", stockController.addStockProduct);
router.put("/kurang", stockController.minStockProduct);

module.exports = router;
