var http = require('http')

http.createServer(function(req, res){
    res.end('Hello World!! wellcome my friend')
}).listen(8081)

console.log("O servidor está rodando na porta 8081")

