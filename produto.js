const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preço: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

async function sincronizar() {
  await sequelize.sync();
  console.log('Tabela Produto sincronizada e arquivo .sqlite atualizado!');
}

sincronizar();

module.exports = Produto;
