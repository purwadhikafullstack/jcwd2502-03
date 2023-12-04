const router = require("express").Router();
const reportController = require("../controllers/reportController");
const { ownerMiddleware } = require("../middlewares/ownerMiddleware");

router.get(
    `/transaction-count`,
    // ownerMiddleware,
    reportController.getTransactionCount
);
router.get(
    `/transaction-count/success`,
    // ownerMiddleware,
    reportController.getSuccessTransactionCount
);
router.get(
    `/transaction-count/failed`,
    // ownerMiddleware,
    reportController.getFailedTransactionCount
);

module.exports = router;
