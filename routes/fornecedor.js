const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

require('../models/Fornecedor')
const Fornecedor = mongoose.model('fornecedores')

const validaCNPJ = require('../control/validaCNPJ')

// Listando todos os fornecedores
router.get('/', (req, res) => {
    Fornecedor.find().lean().sort({nome: 'asc'}).then((fornecedores) => {
        return res.json(fornecedores)
    }).catch((err) => {
        res.send('Erro ao listar os fornecedores<br>' + err)
    })
})

// Cadastrando fornecedores
router.post('/cadastro', (req, res) => {

    var erros = validaCNPJ(req.body.cnpj)

    if(erros.length > 0){
        res.send(erros)

    }else{
        const novoFornecedor = {
            nome: req.body.nome,
            cnpj: req.body.cnpj
        }
        new Fornecedor(novoFornecedor).save().then(() => {
            res.send('Fornecedor cadastrado com sucesso!')
        }).catch((err) => {
            res.send('Houve um erro ao tentar salvar o fornecedor, tente novamente!<br>Erro: ' + err)
        })
    }
})

// Consultando fornecedores
router.get('/consulta/:cnpj', (req, res) => {

    Fornecedor.findOne({cnpj:req.params.cnpj}).lean().then((fornecedor) => {
        return res.json(fornecedor)
    }).catch((err) => {
        res.send('Não há nenhum fornecedor com o cnpj informado em nosso banco de dados')
    })
})

// Editando fornecedores
router.put('/editar/:cnpj', (req, res) => {
    
    var erros = validaCNPJ(req.body.cnpj)

    if(erros.length > 0){
        res.send(erros)

    }else{
        Fornecedor.findOne({cnpj:req.params.cnpj}).then((fornecedor) => {

            fornecedor.nome = req.body.nome
            fornecedor.cnpj = req.body.cnpj

            fornecedor.save().then(() => {
                res.send('Fornecedor editado com sucesso!')
            }).catch((err) => {
                res.send('Houve um erro ao tentar editar o fornecedor, tente novamente!<br>Erro: ' + err)
            })
        }).catch((err) => {
            res.send('Não há nenhum fornecedor com o cnpj informado em nosso banco de dados')
        })
    }
})


// Excluindo fornecedores
router.delete('/deletar/:cnpj', (req, res) => {
    Fornecedor.deleteOne({cnpj: req.params.cnpj}).then(() => {
        res.send('Fornecedor excluído com sucesso!')
    }).catch((err) => {
        res.send('Houve um erro ao tentar excluir o fornecedor, tente novamente!<br>Erro: ' + err)
    })
})

module.exports = router