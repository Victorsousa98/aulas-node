const express = require("express")
const app = express()
const handlebars = require('express-handlebars');
const Sequelize = require("sequelize")
//instalar pacote handlebars

//configurar o express para usar o handlebars
//handlebars é um pacote que permite usar templates html no express  
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
    //app.set serve para configurar o express para usar o handlebars
// devemos criar uma pasta chamada views para armazenar as páginas que serão renderizadas pelo express
//dentro de views devemos criar uma pasta chamada layouts para armazenar os arquivos que serão utilizados como layout
    const sequelize = new Sequelize("postagem", "root", "23071979jid", {
        host: "localhost",
        dialect: "mysql"
    })
    //sequelize é um objeto que representa a conexão com o banco de dados

//Rotas
    //rota de cadastro de postagens
    app.get('/cad', function(req, res){
        res.send("cadastro de post")
    })//send é um método do express que envia uma resposta para o navegador


app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
})
