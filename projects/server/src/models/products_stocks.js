"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class products_stocks extends Model {
        static associate({ products, warehouses, products_stocks_histories }) {
            this.belongsTo(products, { foreignKey: "products_id" });
            this.belongsTo(warehouses, { foreignKey: "warehouses_id" });
            this.hasMany(products_stocks_histories, {
                foreignKey: "products_stocks_id",
            });
        }
    }
    products_stocks.init(
        {
            stock: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "products_stocks",
        }
    );
    return products_stocks;
};
