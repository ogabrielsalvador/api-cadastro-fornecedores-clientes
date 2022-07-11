// Carregando os Módulos

    const express = require('express')
    const morgan = require('morgan')
    const cors = require('cors')
    const bodyParser = require('body-parser')

    const app = express()

    const rota_fornecedor = require('./routes/fornecedor')
    const rota_produto = require('./routes/produto')
    
    const mongoose = require('mongoose')

    require('./models/Fornecedor')
    const Fornecedor = mongoose.model('fornecedores')

    require('./models/Produto')
    const Produto = mongoose.model('produtos')

// Configurações

    // Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())

    // Morgan
        app.use(morgan('dev'))
    
    // Cors
        app.use(cors())
    
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/cadastros').then(() => {
            console.log('Conectado ao mongo')
        }).catch((err) => {
            console.log('Erro ao se conectar: ' + err)
        })

// Rotas
    // Home
        app.get('/', (req, res) => {
            Produto.find().lean().sort({nome: 'asc'}).then((produtos) => {
                return res.json(produtos)
            }).catch((err) => {
                res.send('Erro ao listar os produtos')
            })
        })
        
    // Fornecedor
        app.use('/fornecedor', rota_fornecedor)

    // Produto
        app.use('/produto', rota_produto)

// Outros
        app.listen(9797, () => {
            console.log(`Servidor rodando em http://localhost:9797`)
        })
