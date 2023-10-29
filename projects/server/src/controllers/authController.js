const AuthService = require("../services/authService");

const authController = {
    registerUser: async (req, res) => {
        try {
            const { email, fullname, password } = req.body;

            const serviceResult = await AuthService.registerUser(
                email,
                fullname,
                password
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    getVerifyToken: async (req, res) => {
        try {
            const { userId } = req.params;

            const serviceResult = await AuthService.getVerifyToken(userId);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    verifyUser: async (req, res) => {
        try {
            const { token, users_id } = req.body;

            const serviceResult = await AuthService.verifyUser(token, users_id);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    resendVerificationEmail: async (req, res) => {
        try {
            const { userId } = req.params;

            const serviceResult = await AuthService.resendVerificationEmail(
                userId
            );

            if (!serviceResult.success) throw serviceResult;

            return res.redirect(serviceResult.url);
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            const serviceResult = await AuthService.loginUser(email, password);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    keepLogin: async (req, res) => {
        try {
            const { token } = req;

            const serviceResult = await AuthService.keepLogin(token);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },
};

module.exports = authController;
