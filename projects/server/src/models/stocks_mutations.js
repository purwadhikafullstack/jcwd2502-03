"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class stocks_mutations extends Model {
        static associate({
            users,
            products,
            warehouses,
            products_stocks_histories,
        }) {
            this.belongsTo(users, { foreignKey: "users_id" });
            this.belongsTo(products, { foreignKey: "products_id" });
            this.belongsTo(warehouses, { foreignKey: "warehouses_id" });
            this.hasMany(products_stocks_histories, {
                foreignKey: "stocks_mutations_id",
            });
        }
    }
    stocks_mutations.init(
        {
            total: DataTypes.INTEGER,
            type: DataTypes.ENUM,
            status: DataTypes.ENUM,
        },
        {
            sequelize,
            modelName: "stocks_mutations",
        }
    );
    return stocks_mutations;
};
