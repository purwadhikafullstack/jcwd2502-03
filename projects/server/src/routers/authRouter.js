const router = require("express").Router();
const authController = require("../controllers/authController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");

// router.get(
//     "/refresh-token",
//     authorizeLoggedInUser,
//     authController.keepLoginUser
// );
module.exports = router;