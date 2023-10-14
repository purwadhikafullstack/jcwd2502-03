"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class products extends Model {
        static associate({
            products_categories,
            products_images,
            carts,
            stocks_mutations,
            products_stocks,
            orders_details,
        }) {
            this.belongsTo(products_categories, {
                foreignKey: "products_categories_id",
            });
            this.hasMany(products_images, { foreignKey: "products_id" });
            this.hasMany(carts, { foreignKey: "products_id" });
            this.hasMany(stocks_mutations, { foreignKey: "products_id" });
            this.hasMany(products_stocks, { foreignKey: "products_id" });
            this.hasMany(orders_details, { foreignKey: "products_id" });
        }
    }
    products.init(
        {
            product_name: DataTypes.STRING,
            product_description: DataTypes.STRING,
            product_price: DataTypes.DECIMAL,
            product_weight: DataTypes.DECIMAL,
            product_status: DataTypes.ENUM,
        },
        {
            sequelize,
            modelName: "products",
        }
    );
    return products;
};
