const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' 
});

async function testarConexo() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o SQLite estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

testarConexo();

module.exports = sequelize;
