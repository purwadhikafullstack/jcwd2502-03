const router = require("express").Router();
const {categoryController} = require("../controllers")
const upload1 = require("../middlewares/upload1");

router.get("/", categoryController.allKategori)
router.post("/",upload1, categoryController.createKategori)
router.put("/:id", categoryController.updateKategori)

module.exports = router