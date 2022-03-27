// usamos require para importar o express
const express = require('express');
// pegamos a função express e jogamos para uma variável
// toda vez que precisarmos usar o express, usamos a variável
const app = express();
// para criar um servidor, usamos a propeição app.listen
// o primeiro parâmetro é a porta que o servidor vai rodar e o segundo é uma função callback que será executada quando o servidor estiver rodando
// ela tem que ser a ultima coisa que fazemos no arquivo
// app.listen(8081, function(){
//     console.log("O servidor está rodando na porta 8081")
// });

//========ROTA=========
//para criar uma rota, usamos o método get do express e passamos uma função como parâmetro que será executada quando o usuário acessar a rota.
// o método get recebe dois parâmetros, o primeiro é a rota e o segundo é uma função que será executada quando o usuário acessar a rota.
app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu site!");
})

app.get("/sobre", function(req, res){
    res.send("Sobre nós");
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!");
})

//para criar um parametro na rota, colocamos o : na frente do nome do parametro. Ex: /blog/:id.
//voce so consegue enviar um send por vez, se quiser enviar mais de um, precisa criar um array.
app.get("/ola/:nome/:cargo",function(req, res){
    res.send("Olá " + req.params.nome + " você é " + req.params.cargo);
} )



app.listen(8081, function(){
    console.log("O servidor está rodando na porta 8081")
});