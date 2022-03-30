const mongoose = require('mongoose');

//conetando ao banco de dados mongodb com o mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/aprendendo', {
    useMonogDBClient: true
})
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

mongoose.model('Usuarios', UsuarioSchema); // criando um modelo de usuário