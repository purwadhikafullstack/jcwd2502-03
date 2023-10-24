"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class provinces extends Model {
        static associate({ cities }) {
            this.hasMany(cities, { foreignKey: "province_id", as: 'associatedProvince' });
        }
    }
    provinces.init(
        {
            province: DataTypes.STRING,
            createdAt : {
                type: DataTypes.DATE,
                defaultValue: new Date()
              },
              updatedAt : {
                type: DataTypes.DATE,
                defaultValue: new Date()
              }
        },
        {
            sequelize,
            modelName: "provinces",
        }
    );
    return provinces;
};
