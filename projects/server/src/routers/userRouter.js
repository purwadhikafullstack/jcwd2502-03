const router = require("express").Router();
const userController = require("../controllers/userController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");
const upload1 = require("../middlewares/upload1");

router.patch("/user=:userId", authorizeLoggedInUser, userController.editUser);

router.patch("/image/:id", upload1, userController.editUserAvatar);

module.exports = router;
