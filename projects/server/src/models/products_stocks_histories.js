'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_stocks_histories extends Model {
    static associate({products_stocks,stocks_mutations}) {
    }
  }
  products_stocks_histories.init({
    uid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products_stocks_histories',
  });
  return products_stocks_histories;
};