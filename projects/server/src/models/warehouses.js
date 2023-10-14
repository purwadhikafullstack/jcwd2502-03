"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class warehouses extends Model {
        static associate({
            users,
            orders,
            orders_details,
            products_stocks,
            stocks_mutations,
            cities,
        }) {
            this.hasMany(users, { foreignKey: "warehouses_id" });
            this.hasMany(orders, { foreignKey: "warehouses_id" });
            this.hasMany(orders_details, { foreignKey: "warehouses_id" });
            this.hasMany(products_stocks, { foreignKey: "warehouses_id" });
            this.hasMany(stocks_mutations, { foreignKey: "warehouses_id" });
            this.belongsTo(cities, { foreignKey: "cities_id" });
        }
    }
    warehouses.init(
        {
            name: DataTypes.STRING,
            status: DataTypes.ENUM,
        },
        {
            sequelize,
            modelName: "warehouses",
        }
    );
    return warehouses;
};
