const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Fornecedor = new Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('fornecedores', Fornecedor)