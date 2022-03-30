const express = require("express")
const app = express()
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//instalar pacote handlebars

//configurar o express para usar o handlebars
//handlebars é um pacote que permite usar templates html no express  
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser serve para pegar o corpo da requisição e transformar em json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

   
//Rotas
    //rota de cadastro de postagens
    app.get('/cad', function(req, res){
        res.render('formulário')//renderiza a página formulário

    })//send é um método do express que envia uma resposta para o navegador

    //quando utilizar o método post, o express não irá interpretar o conteúdo da requisição
    //mudar o get para post para que o express interprete a requisição
    app.post('/add', function(req, res){
        req.body.conteudo //pega o conteúdo do formulário
        res.send(" Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
        })

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
})
