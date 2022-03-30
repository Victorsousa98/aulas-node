const db = require('./db')

const Post = db.sequelize.define('postagem', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force: true})
//USAR SYNC UMA UNICA VEZ