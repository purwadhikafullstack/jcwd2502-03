const router = require("express").Router()
const userController = require("../controllers/userController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");
const fileUploader = require("../lib/uploader");

router.patch("/user=:userId", authorizeLoggedInUser, userController.editUser);

router.patch(
    "/avatar/:users_id",
    fileUploader({
        destinationFolder: "avatar",
        fileType: "image",
        prefix: "AVATAR",
    }).single("avatar_image_file"),
    userController.editUserAvatar
);

module.exports = router