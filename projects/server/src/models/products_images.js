"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class products_images extends Model {
        static associate({ products }) {
            this.belongsTo(products, { foreignKey: "products_id" });
        }
    }
    products_images.init(
        {
            image: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "products_images",
        }
    );
    return products_images;
};
