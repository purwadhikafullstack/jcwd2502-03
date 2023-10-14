"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class cities extends Model {
        static associate({ users_addresses, warehouses, provinces }) {
            this.belongsTo(provinces, { foreignKey: "provinces_id" });
            this.hasMany(users_addresses, { foreignKey: "cities_id" });
            this.hasMany(warehouses, { foreignKey: "cities_id" });
        }
    }
    cities.init(
        {
            city_name: DataTypes.STRING,
            postal_code: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "cities",
        }
    );
    return cities;
};
