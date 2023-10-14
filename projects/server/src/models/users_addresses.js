"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class users_addresses extends Model {
        static associate({ users, cities }) {
            this.belongsTo(users, { foreignKey: "users_id" });
            this.belongsTo(cities, { foreignKey: "cities_id" });
        }
    }
    users_addresses.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            is_primary: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "users_addresses",
        }
    );
    return users_addresses;
};
