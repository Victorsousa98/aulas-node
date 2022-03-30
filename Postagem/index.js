const express = require("express")
const app = express()
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//instalar pacote handlebars

//configurar o express para usar o handlebars
//handlebars é um pacote que permite usar templates html no express  
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser serve para pegar o corpo da requisição e transformar em json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

   
//Rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts});
        })
   });

    //rota de cadastro de postagens
    app.get('/cad', function(req, res){
        res.render('formulário')//renderiza a página formulário

    })//send é um método do express que envia uma resposta para o navegador

    //quando utilizar o método post, o express não irá interpretar o conteúdo da requisição
    //mudar o get para post para que o express interprete a requisição
    app.post('/add', function(req, res){
        req.body.conteudo; //pega o conteúdo do formulário
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/');//redireciona para a página inicial
        }).catch((err) => {
            res.send('Erro ao criar postagem')
        })       
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {id: req.params.id}}).then(() => {
            res.send('Postagem deletada com sucesso');
        }).catch((err) => {
            res.send('Erro ao deletar postagem')
        })
    });

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
});
