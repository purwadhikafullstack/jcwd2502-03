"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class carts extends Model {
        static associate({ users, products }) {
            this.belongsTo(users, { foreignKey: "users_id" });
            this.belongsTo(products, { foreignKey: "products_id" });
        }
    }
    carts.init(
        {
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "carts",
        }
    );
    return carts;
};
