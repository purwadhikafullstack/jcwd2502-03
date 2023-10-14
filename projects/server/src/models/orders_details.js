"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class orders_details extends Model {
        static associate({ users, warehouses, products }) {
            this.belongsTo(users, { foreignKey: "users_id" });
            this.belongsTo(warehouses, { foreignKey: "warehouses_id" });
            this.belongsTo(products, { foreignKey: "products_id" });
        }
    }
    orders_details.init(
        {
            quantity: DataTypes.INTEGER,
            product_price: DataTypes.DECIMAL,
            transaction_uid: DataTypes.STRING,
            status: DataTypes.ENUM(
                "Payment Pending",
                "Waiting for Payment Approval",
                "Order Proccess",
                "Package Sent",
                "Package Arrived",
                "Order Completed",
                "Order Canceled"
            ),
        },
        {
            sequelize,
            modelName: "orders_details",
        }
    );
    return orders_details;
};
