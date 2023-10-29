const Service = require("./service");
const db = require("../models/");
const { sequelize } = require("../models");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const moment = require("moment");
const fs = require("fs");
const mustache = require("mustache");
const transporter = require("../helper/transporter");
const { generateToken } = require("../lib/jwt");

class AuthService extends Service {
    static registerUser = async (email, fullname, password) => {
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

            const hashPassword = bcrypt.hashSync(password, 5);

            const createUser = await db.users.create({
                email,
                fullname,
                password: hashPassword,
                status: "Active",
                role: "Customer",
                is_verified: false,
            });

            const loginToken = generateToken({
                id: createUser.id,
            });

            const verifyAccountToken = nanoid(40);

            await db.verification_tokens.create({
                token: verifyAccountToken,
                is_valid: true,
                valid_until: moment().add(1, "hour"),
                users_id: createUser.id,
            });

            const verifyUserLink = `http://localhost:3000/verification/${verifyAccountToken}`;

            const emailTemplate = fs
                .readFileSync(__dirname + "/../templates/verifyAccount.html")
                .toString();

            const renderedTemplate = mustache.render(emailTemplate, {
                name: fullname,
                verify_url: verifyUserLink,
            });

            await transporter.sendMail({
                from: "Tech Heaven",
                to: email,
                subject: "Verify Your Account!",
                html: renderedTemplate,
            });

            return this.handleSuccess({
                statusCode: 201,
                message:
                    "Account create success, please check your email to verify your account!",
                data: {
                    createUser,
                    loginToken,
                },
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getVerifyToken = async (userId) => {
        try {
            const getToken = await db.verification_tokens.findAll({
                where: {
                    users_id: userId,
                    is_valid: true,
                },
            });

            if (!getToken.length) {
                return this.handleError({
                    message: "Token is invalid.",
                    statusCode: 404,
                });
            }

            return this.handleSuccess({
                statusCode: 201,
                message: "Token is valid.",
                data: getToken,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static verifyUser = async (token, users_id) => {
        try {
            const userIsVerified = await db.users.findOne({
                where: {
                    id: users_id,
                    is_verified: true,
                },
            });

            if (userIsVerified) {
                return this.handleError({
                    message: "User has been verified.",
                    statusCode: 401,
                });
            }

            const verifyToken = await db.verification_tokens.findOne({
                where: {
                    token,
                    is_valid: true,
                    users_id,
                },
            });

            if (!verifyToken) {
                return this.handleError({
                    message: "Token is not valid!",
                    statusCode: 401,
                });
            }

            await db.users.update(
                {
                    is_verified: true,
                },
                {
                    where: {
                        id: verifyToken.users_id,
                    },
                }
            );

            await db.verification_tokens.update(
                {
                    is_valid: false,
                },
                {
                    where: {
                        users_id: verifyToken.users_id,
                    },
                }
            );

            return this.handleSuccess({
                statusCode: 201,
                message: "Congratulations! Your account has been verified!",
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static resendVerificationEmail = async (userId) => {
        try {
            const findUser = await db.users.findOne({
                where: {
                    id: userId,
                },
            });

            if (findUser.is_verified) {
                return this.handleError({
                    message: "Your account has been verified!",
                    statusCode: 400,
                });
            }

            const findValidToken = await db.verification_tokens.findAll({
                where: {
                    users_id: findUser.id,
                    is_valid: true,
                },
            });

            if (findValidToken) {
                await db.verification_tokens.update(
                    {
                        is_valid: false,
                    },
                    {
                        where: {
                            users_id: findValidToken.users_id,
                        },
                    }
                );
            }
            const verifyAccountToken = nanoid(40);

            await db.verification_tokens.create({
                token: verifyAccountToken,
                is_valid: true,
                valid_until: moment().add(1, "hour"),
                users_id: findUser.id,
            });

            const verifyUserLink = `http://localhost:3000/verification/${verifyAccountToken}`;

            const emailTemplate = fs
                .readFileSync(__dirname + "/../templates/verifyAccount.html")
                .toString();

            const renderedTemplate = mustache.render(emailTemplate, {
                name: findUser.fullname,
                verify_url: verifyUserLink,
            });

            await transporter.sendMail({
                from: "Tech Heaven",
                to: findUser.email,
                subject: "Verify Your Account!",
                html: renderedTemplate,
            });

            return this.handleSuccess({
                message: "Verification email sent.",
                statusCode: 201,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static loginUser = async (email, password) => {
        try {
            const findUser = await db.users.findOne({
                where: {
                    email,
                },
            });

            if (!findUser) {
                return this.handleError({
                    message: "Account not found!",
                    statusCode: 400,
                    isError: true,
                });
            }

            const comparePassword = bcrypt.compareSync(
                password,
                findUser.password
            );

            if (!comparePassword) {
                return this.handleError({
                    message: "Wrong password!",
                    statusCode: 400,
                    isError: true,
                });
            }

            delete findUser.dataValues.password;

            const token = generateToken({
                id: findUser.id,
            });

            return this.handleSuccess({
                message: "Login success!",
                statusCode: 200,
                data: {
                    user: findUser,
                    token,
                },
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static keepLogin = async (token) => {
        try {
            const renewedToken = generateToken({
                id: token.id,
            });

            const findUser = await db.users.findByPk(token.id);

            delete findUser.dataValues.password;

            return this.handleSuccess({
                statusCode: 200,
                message: "User's Token Renewed",
                data: {
                    tokens: renewedToken,
                    user: findUser,
                },
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
