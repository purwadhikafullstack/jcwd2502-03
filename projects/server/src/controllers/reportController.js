const ReportService = require("../services/reportService");

const reportController = {
    getTransactionCount: async (req, res) => {
        try {
            const { stateOfDate, warehouseId } = req.body;

            const serviceResult = await ReportService.getTransactionCount(
                stateOfDate,
                warehouseId
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getSuccessTransactionCount: async (req, res) => {
        try {
            const { stateOfDate } = req.body;

            const serviceResult = await ReportService.getSuccessTransactionCount(
                stateOfDate
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getFailedTransactionCount: async (req, res) => {
        try {
            const { stateOfDate } = req.body;

            const serviceResult = await ReportService.getFailedTransactionCount(
                stateOfDate
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getTodayTransaction: async (req, res) => {
        try {
            const serviceResult = await ReportService.getTodayTransaction();

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getSales: async (req, res) => {
        try {
            const { stateOfDate } = req.body;

            const serviceResult = await ReportService.getSales(stateOfDate);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getRevenue: async (req, res) => {
        try {
            const { stateOfDate } = req.body;

            const serviceResult = await ReportService.getRevenue(
                stateOfDate
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getProductSoldCount: async (req, res) => {
        try {
            const { stateOfDate, productId } = req.body;

            const serviceResult = await ReportService.getProductSoldCount(
                stateOfDate,
                productId
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getRevenuePerProduct: async (req, res) => {
        try {
            const { stateOfDate, productId } = req.body;

            const serviceResult = await ReportService.getRevenuePerProduct(
                stateOfDate,
                productId
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },
};

module.exports = reportController;
