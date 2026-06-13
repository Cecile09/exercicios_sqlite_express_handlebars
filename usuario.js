const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Usuário = sequelize.define('Usuário', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

async function sincronizar() {
  await sequelize.sync();
  console.log('Tabela Usuário sincronizada!');
}

sincronizar();

module.exports = Usuário;
