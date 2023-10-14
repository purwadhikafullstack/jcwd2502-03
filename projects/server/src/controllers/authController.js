const AuthService = require("../services/authService");

const authController = {
    registerUser: async (req, res) => {
        try {
            const { email } = req.body;

            const serviceResult = await AuthService.registerUser(email);

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
            const { fullname, password } = req.body;

            const serviceResult = await AuthService.verifyUser(
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
};

module.exports = authController;
