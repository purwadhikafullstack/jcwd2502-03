"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class provinces extends Model {
        static associate({ cities }) {
            this.hasMany(cities, { foreignKey: "province_id" });
        }
    }
    provinces.init(
        {
            province: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "provinces",
        }
    );
    return provinces;
};
