const Service = require("./service");
const db = require("../models/");
const { sequelize } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

class ReportService extends Service {
    static getTransactionCount = async (stateOfDate = "Harian", warehouseId) => {
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
                        warehouses_id: warehouseId
                    },
                });
            } else if (stateOfDate === "Mingguan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "week"),
                            [Op.lt]: NOW,
                        },
                        warehouses_id: warehouseId
                    },
                });
            } else if (stateOfDate === "Bulanan") {
                countNewOrder = await db.orders_details.count({
                    where: {
                        updatedAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "month"),
                            [Op.lt]: NOW,
                        },
                        warehouses_id: warehouseId
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

    static getTodayTransaction = async () => {
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
                        [Op.ne]: "Order Canceled",
                    },
                },
            });

            const yesterdayOrder = await db.orders_details.count({
                where: {
                    createdAt: {
                        [Op.gt]: moment(TODAY_START).subtract(1, "day"),
                        [Op.lt]: TODAY_START,
                    },
                    status: {
                        [Op.ne]: "Order Canceled",
                    },
                },
            });

            const todayAndYesterdayOrder = {
                todayOrder,
                yesterdayOrder,
            };

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

    static getSales = async (stateOfDate = "Harian") => {
        try {
            let results, metadata;

            if (stateOfDate === "Harian") {
                [results, metadata] = await sequelize.query(
                    "SELECT DAY(createdAt) as `day`, sum (`quantity`) AS `sum` FROM `orders_details` AS `orders_details` GROUP BY DAY(createdAt) ORDER BY DAY(createdAt) ASC"
                );
            } else if (stateOfDate === "Mingguan") {
                [results, metadata] = await sequelize.query(
                    "SELECT WEEK(createdAt) as `week`, sum(`quantity`) AS `sum` FROM `orders_details` AS `orders_details` GROUP BY WEEK(createdAt) ORDER BY WEEK(createdAt) ASC"
                );
            } else if (stateOfDate === "Bulanan") {
                [results, metadata] = await sequelize.query(
                    "SELECT createdAt as `month`, sum(`quantity`) AS `sum` FROM `orders_details` AS `orders_details` WHERE YEAR (createdAt) = " +
                        moment().format("YYYY") +
                        " GROUP BY MONTH(createdAt) ORDER BY MONTH(createdAt) ASC"
                );
            } else if (stateOfDate === "Tahunan") {
                [results, metadata] = await sequelize.query(
                    "SELECT createdAt as `year`, sum(`quantity`) AS `sum` FROM `orders_details` AS `orders_details` GROUP BY YEAR(createdAt) ORDER BY YEAR(createdAt) ASC"
                );
            }

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get data!",
                data: results,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getRevenue = async (stateOfDate = "Harian") => {
        const TODAY_START = moment().startOf("day");
        const NOW = moment().format("YYYY-MM-DD");

        try {
            let revenue;
            let capital;

            if (stateOfDate === "Harian") {
                const [resultRevenue, metadata] = await sequelize.query(
                    "SELECT DAY(createdAt) as `day`, sum(product_price * quantity) AS `sum` FROM `orders_details` AS `orders_details` GROUP BY DAY(createdAt) ORDER BY DAY(createdAt) ASC"
                );

                revenue = resultRevenue;
            } else if (stateOfDate === "Mingguan") {
                const [resultRevenue, metadata] = await sequelize.query(
                    "SELECT WEEK(createdAt) as `week`, sum(product_price * quantity) AS `sum` FROM `orders_details` AS `orders_details` GROUP BY WEEK(createdAt) ORDER BY WEEK(createdAt) ASC"
                );

                revenue = resultRevenue;
            } else if (stateOfDate === "Bulanan") {
                const [resultRevenue, metadata] = await sequelize.query(
                    "SELECT createdAt as `month`, sum(product_price * quantity) AS `sum` FROM `orders_details` AS `orders_details` WHERE YEAR (createdAt) = " +
                        moment().format("YYYY") +
                        " GROUP BY MONTH(createdAt) ORDER BY MONTH(createdAt) ASC"
                );

                revenue = resultRevenue;
            } else if (stateOfDate === "Tahunan") {
                const [resultRevenue, metadata] = await sequelize.query(
                    "SELECT createdAt as `year`, sum(product_price * quantity) AS `sum` FROM `orders_details` AS `orders_details` GROUP BY YEAR(createdAt) ORDER BY YEAR(createdAt) ASC"
                );

                revenue = resultRevenue;
            }

            let data = revenue;

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get data!",
                data,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getProductSoldCount = async (stateOfDate, productId) => {
        const TODAY_START = moment().startOf("day");
        const NOW = moment().format("YYYY-MM-DD");

        try {
            let count, prevCount;

            if (stateOfDate === "Harian") {
                count = await db.orders_details.count({
                    where: {
                        createdAt: {
                            [Op.gt]: TODAY_START,
                            [Op.lt]: NOW,
                        },
                        products_id: productId,
                        status: {
                            [Op.or]: [
                                "Package Sent",
                                "Package Arrived",
                                "Order Completed",
                            ],
                        },
                    },
                });

                // prevCount = await db.orders_details.count({
                //     where: {
                //         createdAt: {
                //             [Op.gt]: moment(TODAY_START).subtract(1, "day"),
                //             [Op.lt]: TODAY_START,
                //         },
                //         products_id: productId,
                //         status: {
                //             [Op.or]: [
                //                 "Package Sent",
                //                 "Package Arrived",
                //                 "Order Completed",
                //             ],
                //         },
                //     },
                // })
            } else if (stateOfDate === "Mingguan") {
                count = await db.orders_details.count({
                    where: {
                        createdAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "week"),
                            [Op.lt]: NOW,
                        },
                        products_id: productId,
                        status: {
                            [Op.or]: [
                                "Package Sent",
                                "Package Arrived",
                                "Order Completed",
                            ],
                        },
                    },
                });

                // prevCount = await db.orders_details.count({
                //     where: {
                //         createdAt: {
                //             [Op.gt]: moment(TODAY_START).subtract(2, "week"),
                //             [Op.lt]: moment(TODAY_START).subtract(1, "week"),
                //         },
                //         products_id: productId,
                //         status: {
                //             [Op.or]: [
                //                 "Package Sent",
                //                 "Package Arrived",
                //                 "Order Completed",
                //             ],
                //         },
                //     },
                // })
            } else if (stateOfDate === "Bulanan") {
                count = await db.orders_details.count({
                    where: {
                        createdAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "month"),
                            [Op.lt]: NOW,
                        },
                        products_id: productId,
                        status: {
                            [Op.or]: [
                                "Package Sent",
                                "Package Arrived",
                                "Order Completed",
                            ],
                        },
                    },
                });

                // prevCount = await db.orders_details.count({
                //     where: {
                //         createdAt: {
                //             [Op.gt]: moment(TODAY_START).subtract(2, "months"),
                //             [Op.lt]: moment(TODAY_START).subtract(1, "month"),
                //         },
                //         products_id: productId,
                //         status: {
                //             [Op.or]: [
                //                 "Package Sent",
                //                 "Package Arrived",
                //                 "Order Completed",
                //             ],
                //         },
                //     },
                // })
            } else if (stateOfDate === "Tahunan") {
                count = await db.orders_details.count({
                    where: {
                        createdAt: {
                            [Op.gt]: moment(TODAY_START).subtract(1, "year"),
                            [Op.lt]: NOW,
                        },
                        products_id: productId,
                        status: {
                            [Op.or]: [
                                "Package Sent",
                                "Package Arrived",
                                "Order Completed",
                            ],
                        },
                    },
                });
                // prevCount = await db.orders_details.count({
                //     where: {
                //         createdAt: {
                //             [Op.gt]: moment(TODAY_START).subtract(2,"years"),
                //             [Op.lt]: moment(TODAY_START).subtract(1,"year"),
                //         },
                //         products_id: productId,
                //         status: {
                //             [Op.or]: [
                //                 "Package Sent",
                //                 "Package Arrived",
                //                 "Order Completed",
                //             ],
                //         },
                //     },
                // })
            }

            // const itemCount = {
            //     data: count || 0,
            //     prevData: prevCount || 0
            // }

            const itemCount = {
                data: count || 0,
            };

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get data!",
                data: itemCount,
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
