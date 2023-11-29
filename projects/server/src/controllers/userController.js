const UserService = require("../services/userService");

const userController = {
    editUser: async (req, res) => {
        try {
            const { users_id } = req.params;

            const { fullname } = req.body;

            const serviceResult = await UserService.editUser(
                users_id,
                req.body
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

    editUserAvatar: async (req, res) => {
        try {
            const { users_id } = req.params;

            const serviceResult = await UserService.editUserAvatar(
                users_id,
                req.files
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

module.exports = userController;
