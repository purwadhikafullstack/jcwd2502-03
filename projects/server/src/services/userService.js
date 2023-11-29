const Service = require("./service");
const db = require("../models/");
const { sequelize } = require("../models");
const { deleteFiles } = require("../helper/deleteFile");

class UserService extends Service {
    static editUser = async (users_id, body) => {
        try {
            const findUser = await db.users.findByPk(users_id);

            if (!findUser) {
                return this.handleError({
                    statusCode: 404,
                    message: `User with ID: ${users_id} not Found!`,
                });
            }

            const editUserData = await db.users.update(
                {
                    fullname: body.fullname,
                },
                {
                    where: {
                        id: users_id,
                    },
                }
            );

            return this.handleSuccess({
                message: "User Edit Success",
                statusCode: 200,
                data: editUserData,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static editUserAvatar = async (users_id, files) => {
        try {
            const findUser = await db.users.findOne({
                where: {
                    id: users_id,
                },
            });

            if (!findUser) {
                return this.handleError({
                    message: "No user found!",
                    statusCode: 404,
                });
            }

            const dataImage = files.images.map((value) => {
                return {
                    image: value.path,
                };
            });

            // await deleteFiles({
            //     images: [{ path: findUser.dataValues.avatar }],
            // });

            const updateImage = await db.users.update(
                { avatar: dataImage[0].image },
                { where: { id: users_id } }
            );

            return this.handleSuccess({
                message: "Profile Picture Updated!",
                statusCode: 200,
                data: updateImage,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };
}

module.exports = UserService;
