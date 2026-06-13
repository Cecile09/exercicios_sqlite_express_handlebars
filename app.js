const express = require('express');
const app = express();
const Produto = require('./Produto'); 

app.use(express.json());

// -------------------------------------------------------------
// Exercício 4: Criar 3 produtos e listar todos
// -------------------------------------------------------------
app.get('/exercício4', async (req, res) => {
  try {
  
    await Produto.create({ nome: 'Teclado Mecânico', preço: 250.00 });
    await Produto.create({ nome: 'Mouse Gamer', preço: 150.00 });
    await Produto.create({ nome: 'Monitor 144Hz', preço: 1200.00 });


    const produtos = await Produto.findAll();

  
    console.log('--- Todos os Produtos Cadastrados ---');
    console.log(JSON.stringify(produtos, null, 2));

    res.send('Exercício 4 concluído! Verifique o console do VSCode.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no Exercício 4');
  }
});

// -------------------------------------------------------------
// Exercício 5: Buscar produto por ID usando findByPk()
// -------------------------------------------------------------
app.get('/exercício5', async (req, res) => {
  try {
    const idBusca = 1; 
    

    const produto = await Produto.findByPk(idBusca);

    if (produto) {
  
      console.log(`\n--- Produto Encontrado (ID: ${idBusca}) ---`);
      console.log(`Nome: ${produto.nome}`);
      console.log(`Preço: R$ ${produto.preço}`);
      
      res.send(`Exercício 5 concluído! Produto encontrado: ${produto.nome}`);
    } else {
      console.log(`Produto com ID ${idBusca} não encontrado.`);
      res.send(`Exercício 5: Produto ID ${idBusca} não existe no banco.`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no Exercício 5');
  }
});

// -------------------------------------------------------------
// Exercício 6: Atualizar o preço de um produto usando save()
// -------------------------------------------------------------
app.get('/exercício6', async (req, res) => {
  try {
    const idBusca = 2; 
    
    const produto = await Produto.findByPk(idBusca);

    if (produto) {
      console.log(`\nPreço antigo do ${produto.nome}: R$ ${produto.preço}`);
      
      produto.preço = 189.90; 
      
      await produto.save();

      console.log(`Preço atualizado com sucesso para: R$ ${produto.preço}`);
      res.send(`Exercício 6 concluído! Preço do produto ID ${idBusca} atualizado.`);
    } else {
      res.send(`Exercício 6: Produto ID ${idBusca} não encontrado para atualizar.`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no Exercício 6');
  }
});

// -------------------------------------------------------------
// Exercício 7: Buscar e deletar um produto usando destroy()
// -------------------------------------------------------------
app.get('/exercício7', async (req, res) => {
  try {
    const idDeletar = 3; 

    const produto = await Produto.findByPk(idDeletar);

    if (produto) {
    
      await produto.destroy();
      console.log(`\nProduto "${produto.nome}" (ID: ${idDeletar}) foi deletado com sucesso.`);
    } else {
      console.log(`\nProduto com ID ${idDeletar} não foi encontrado para remoção.`);
    }

    const produtosRestantes = await Produto.findAll();
    console.log('--- Produtos Restantes no Banco ---');
    console.log(JSON.stringify(produtosRestantes, null, 2));

    res.send('Exercício 7 concluído! Verifique o console do VSCode.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no Exercício 7');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
