const router = require("express").Router();
const {stockController} = require("../controllers")

router.get("/", stockController.allStock);
router.get("/total", stockController.totalStockProduct);
router.put("/", stockController.addStockProduct);

module.exports = router;
