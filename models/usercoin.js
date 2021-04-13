'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userCoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userCoin.belongsTo(models.coin)
      userCoin.belongsTo(models.user)
    }
  };
  userCoin.init({
    userId: DataTypes.INTEGER,
    coinId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'userCoin',
  });
  return userCoin;
};