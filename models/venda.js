'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Venda.belongsTo(models.Cliente,
      {foreignKey: 'ClienteID'}
      );
     Venda.belongsTo(models,Vendedor
      {foreignKey: 'VendedorID'}
      );
      Venda.belongsToMany(models.Produto,
        {foregeinKey: 'ProdutoId', }
      );
      Venda.hasMany(models.Item, 
        {foregeinKey:'VendaID'}
      );
    }
  }
  Venda.init({
    data: DataTypes.DATE,
    ClienteId: DataTypes.INTEGER,
    VendedorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venda',
  });
  return Venda;
};