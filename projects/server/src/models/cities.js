"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class cities extends Model {
        static associate({ users_addresses, warehouses, provinces }) {
            this.belongsTo(provinces, { foreignKey: 'province_id', as: 'associatedProvince' });
            this.hasMany(warehouses, { foreignKey: "cities_id" });
        }
    }
    cities.init(
        {
            city_name: DataTypes.STRING,
            postal_code: DataTypes.STRING,
            province : DataTypes.STRING,
            type : DataTypes.STRING,
            isWarehouse : DataTypes.ENUM("true, false"),
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
            modelName: "cities",
        }
    );
    return cities;
};
