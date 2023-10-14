const Service = require("./service");
const db = require("../models/");
const { sequelize } = require("../models");
const bcrypt = require("bcrypt");

class AuthService extends Service {
    static registerUser = async (email) => {
        try {
            const emailTaken = await db.users.findOne({
                where: {
                    email,
                },
            });

            if (emailTaken) {
                return this.handleError({
                    statusCode: 400,
                    message: "Email has been taken!",
                });
            }

            const createUser = await db.users.create({
                email,
            });

            

            return this.handleSuccess({
                statusCode: 201,
                message: "Account Create Success!",
                data: createUser,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static verifyUser = async (fullname, password) => {
        try {
            const hashPassword = bcrypt.hashSync(password, 5);

            const userVerification = await db.users.update({
                fullname: body.fullname,
                password: hashPassword,
                status: body.status,
                role: body.role,
                is_verified: true,
            });

            return this.handleSuccess({
                statusCode: 201,
                message: "Account Verification Success!",
                data: userVerification,
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

module.exports = AuthService;
