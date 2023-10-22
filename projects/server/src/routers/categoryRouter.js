const router = require("express").Router();
const {categoryController} = require("../controllers")

router.get("/", categoryController.allKategori)

module.exports = router