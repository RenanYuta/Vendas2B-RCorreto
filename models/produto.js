'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.hasMany(models.Item,{
        foregeisKey:'ProdutoId'}
      );
      Produto.belongsToMany(models.Venda,
        {foreignKey: 'ProdutoId', through: 'Item',}
      );
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    unidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};