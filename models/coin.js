'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      coin.belongsToMany(models.user, {
        through: "userCoins",
        foreignKey: "coinId"
      })
    }
  };
  coin.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    ticker: DataTypes.STRING,
    logoUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'coin',
  });
  return coin;
};