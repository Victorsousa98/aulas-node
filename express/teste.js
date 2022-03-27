const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '23071979jid', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!');
}).catch(err => {
    console.error('Falha ao se conectar. erro:', err);
});

//para criar uma tabela no banco de dados, usamos o método define do Sequelize.
// o primeiro parâmetro é o nome da tabela e o segundo é um objeto com as colunas da tabela.
// o objeto é composto por um objeto para cada coluna da tabela e um objeto para cada chave estrangeira.
const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING //tipo de dado.
    },
    conteudo: {
        type: Sequelize.TEXT //tipo de dado
    }

});
Postagem.create({
    titulo: "Titulo da postagem",
    conteudo: "Conteudo da postagem"
})

const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});
Usuario.create({
    nome: "José",
    sobrenome: "Silva",
    idade: 20,
    email: "blabla@mail.com"
})




// para criar a tabela no banco de dados, precisamos chamar o método sync do Sequelize.
// o método sync só será executado quando o banco de dados não existir.
// o método sync também pode ser executado para atualizar, criar e deletar a tabela.
//force: true, para forçar a criação da tabela.
