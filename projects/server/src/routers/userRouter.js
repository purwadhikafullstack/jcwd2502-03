const router = require("express").Router()
const userController = require("../controllers/userController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");
const multerupload = require("../lib/multer");

router.patch("/user=:userId", authorizeLoggedInUser, userController.editUser);

// router.patch(
//     "/:users_id",
//     multerupload({
//         destinationFolder: "avatar",
//         fileType: "image",
//         prefix: "AVATAR",
//     }).single("avatar_image_file"),
//     userController.editUserAvatar
// );

module.exports = router