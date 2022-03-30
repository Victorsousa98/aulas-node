const mongoose = require('mongoose');

//conetando ao banco de dados mongodb com o mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/aprendendo')
    .then(() => console.log('Conectado ao MongoDB...'))
    .catch(err => console.log('Erro ao se conectar ao MongoDB: ' + err));


// Model de usuário
const UsuarioSchema = mongoose.Schema({ // criando um schema. O schema é um modelo de como os dados serão armazenados no banco de dados
    nome: {
        type: String, //tipo do dado
        required: true, //campo obrigatório
        trim: true //retira espaços em branco
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    login: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    }
});
//Collection de usuários
    mongoose.model('Usuarios', UsuarioSchema); // criando um modelo de usuário

//crianção de um usuário
const AdicionaDados = mongoose.model('Usuarios');
    new AdicionaDados({
        nome: 'João',
        email: 'victorsousa@email.com',
        login: 'victorsousa',
        senha: '123456'
    }).save().then(() => console.log('Usuário criado com sucesso!'))
        .catch(err => console.log('Erro ao criar usuário: ' + err));