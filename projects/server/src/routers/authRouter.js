const router = require("express").Router();
const authController = require("../controllers/authController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");

router.post("/register", authController.registerUser);
router.get("/verify/:token", authController.verifyUser);
router.post(
    "/resend-verification-email",
    authorizeLoggedInUser,
    authController.resendVerificationEmail
);
router.post("/login", authController.loginUser);
router.get("/refresh-token", authorizeLoggedInUser, authController.keepLogin);

module.exports = router;