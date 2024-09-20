'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Produto,
        {foregeinsKey: 'ProdutoId'});
      Item.belongsTo(models.Venda,
        {ForegeinKey: 'VendaId'});
    }
  }
  Item.init({
    VendaId: DataTypes.INTEGER,
    ProdutoId: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};