const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Produto = new Schema({
    codigo: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cnpj: {                     // o usuário deverá informar o cnpj com apenas os números (sem os caracteres especiais)
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('produtos', Produto)