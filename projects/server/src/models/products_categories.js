"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products_categories extends Model {
    static associate({ products }) {
      this.hasMany(products, { foreignKey: "products_categories_id" });
    }
  }
  products_categories.init(
    {
      category: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "products_categories",
    }
  );
  return products_categories;
};
