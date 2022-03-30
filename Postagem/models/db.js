//conexão com o banco de dados MySQL
const Sequelize = require("sequelize")

//dentro de views devemos criar uma pasta chamada layouts para armazenar os arquivos que serão utilizados como layout
const sequelize = new Sequelize("postapp", "root", "23071979jid", {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
})
//sequelize é um objeto que representa a conexão com o banco de dados

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}