const router = require("express").Router();
const authController = require("../controllers/authController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");

router.post("/register", authController.registerUser);
router.get("/verify/user-:userId", authController.getVerifyToken);
router.post("/verify", authController.verifyUser);
router.post(
    "/resend-verification-email/:userId",
    authorizeLoggedInUser,
    authController.resendVerificationEmail
);
router.post("/login", authController.loginUser);
router.get("/refresh-token", authorizeLoggedInUser, authController.keepLogin);

module.exports = router;
