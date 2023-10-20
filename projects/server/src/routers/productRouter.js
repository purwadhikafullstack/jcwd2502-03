const router = require("express").Router();
const {productController} = require("../controllers")

router.get("/", productController.allProduct)
router.get("/kategori", productController.allKategori)

module.exports = router