const Service = require("./service");
const db = require("../models/");
const { sequelize } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

class ReportService extends Service {
    static getTransactionCount = async (stateOfDate = "Harian") => {
        const TODAY_START = moment().startOf("day");
        const NOW = moment().format("YYYY-MM-DD");

        try {
            let countNewOrder;

            if (stateOfDate === "Harian") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: TODAY_START,
                            [Op.lt]: NOW,
                        },
                    },
                });
            } else if (stateOfDate === "Mingguan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "week"),
                            [Op.lt]: NOW,
                        },
                    },
                });
            } else if (stateOfDate === "Bulanan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "month"),
                            [Op.lt]: NOW,
                        },
                    },
                });
            }

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get data!",
                data: countNewOrder,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getSuccessTransactionCount = async (stateOfDate = "Harian") => {
        const TODAY_START = moment().startOf("day");
        const NOW = moment().format("YYYY-MM-DD");

        try {
            let countNewOrder;

            if (stateOfDate === "Harian") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: TODAY_START,
                            [Op.lt]: NOW,
                        },
                        status: "Order Completed",
                    },
                });
            } else if (stateOfDate === "Mingguan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "week"),
                            [Op.lt]: NOW,
                        },
                        status: "Order Completed",
                    },
                });
            } else if (stateOfDate === "Bulanan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "month"),
                            [Op.lt]: NOW,
                        },
                        status: "Order Completed",
                    },
                });
            }

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get data!",
                data: countNewOrder,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getFailedTransactionCount = async (stateOfDate = "Harian") => {
        const TODAY_START = moment().startOf("day");
        const NOW = moment().format("YYYY-MM-DD");

        try {
            let countNewOrder;

            if (stateOfDate === "Harian") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: TODAY_START,
                            [Op.lt]: NOW,
                        },
                        status: "Order Canceled",
                    },
                });
            } else if (stateOfDate === "Mingguan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "week"),
                            [Op.lt]: NOW,
                        },
                        status: "Order Canceled",
                    },
                });
            } else if (stateOfDate === "Bulanan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "month"),
                            [Op.lt]: NOW,
                        },
                        status: "Order Canceled",
                    },
                });
            }

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get data!",
                data: countNewOrder,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getTodayTransaction = async (stateOfDate = "Harian") => {
        const TODAY_START = moment().startOf("day");
        const NOW = moment().format("YYYY-MM-DD");

        try {
            const todayOrder = await db.orders_details.count({
                where: {
                    createdAt: {
                        [Op.gt]: TODAY_START,
                        [Op.lt]: NOW,
                    },
                    status: {
                        [Op.ne]: "Order Canceled"
                    }
                },
            });

            const yesterdayOrder = await db.orders_details.count({
                where: {
                    createdAt: {
                        [Op.gt]: moment(TODAY_START).subtract(1,"day"),
                        [Op.lt]: TODAY_START,
                    },
                    status: {
                        [Op.ne]: "Order Canceled"
                    }
                },
            });

            const todayAndYesterdayOrder = {
                todayOrder,
                yesterdayOrder
            }

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get data!",
                data: todayAndYesterdayOrder,
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

module.exports = ReportService;
