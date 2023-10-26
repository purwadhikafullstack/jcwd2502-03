"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class users_addresses extends Model {
        static associate({ users, cities, tb_ro_cities }) {
            this.belongsTo(users, { foreignKey: "users_id" });
            this.belongsTo(cities, { foreignKey: "cities_id" });
            this.belongsTo(tb_ro_cities, { foreignKey: "tb_ro_cities_id" });
        }
    }
    users_addresses.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            lng: DataTypes.STRING,
            lat: DataTypes.STRING,
            is_primary: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "users_addresses",
        }
    );
    return users_addresses;
};
