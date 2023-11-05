const router = require("express").Router();
const {categoryController} = require("../controllers")
const upload1 = require("../middlewares/upload1");

router.get("/", categoryController.allKategori)
router.post("/",upload1, categoryController.createKategori)
router.put("/:id", categoryController.updateKategori)
router.put("/image/:id",upload1, categoryController.updateImage)
router.put("/status/:id", categoryController.updateStatus)
router.delete("/:id", categoryController.deleteKategori)
router.delete("/restore/:id", categoryController.restoreKategori)

module.exports = router