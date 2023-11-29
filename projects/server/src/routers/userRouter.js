const router = require("express").Router();
const userController = require("../controllers/userController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");
const upload1 = require("../middlewares/upload1");

router.patch("/user=:users_id", authorizeLoggedInUser, userController.editUser);

router.patch("/image/:users_id", upload1, userController.editUserAvatar);

module.exports = router;
