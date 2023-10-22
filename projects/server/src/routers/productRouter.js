const router = require("express").Router();
const {productController} = require("../controllers")

router.get("/", productController.allProduct)
router.get("/:id", productController.productDetail)

module.exports = router