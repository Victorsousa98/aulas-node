const mongoose = require('mongoose');

//conetando ao banco de dados mongodb com o mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/aprendendo', {
    useMonogDBClient: true
})
    .then(() => console.log('Conectado ao MongoDB...'))
    .catch(err => console.log('Erro ao se conectar ao MongoDB: ' + err));