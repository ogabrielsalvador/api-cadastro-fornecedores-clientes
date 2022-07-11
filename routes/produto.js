const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

require('../models/Produto')
const Produto = mongoose.model('produtos')

const validaCNPJ = require('../control/validaCNPJ')

// Listando todos os produtos
router.get('/', (req, res) => {
    Produto.find().lean().sort({data: 'desc'}).then((produtos) => {
        return res.json(produtos)
    }).catch((err) => {
        res.send('Erro ao listar os produtos<br>' + err)
    })
})

// Listando todos os produtos de um mesmo fornecedor
router.get('/:cnpj', (req, res) => {
    Produto.find({cnpj:req.params.cnpj}).lean().then((produtos) => {
        return res.json(produtos)
    }).catch((err) => {
        res.send('Erro ao listar os produtos do fornecedor informado<br>' + err)
    })
})

// Cadastrando produtos
router.post('/cadastro', (req, res) => {

    var erros = validaCNPJ(req.body.cnpj)

    if(erros.length > 0){
        res.send(erros)

    }else{
        const novoProduto = {
            codigo: req.body.codigo,
            nome: req.body.nome,
            cnpj: req.body.cnpj
        }
        new Produto(novoProduto).save().then(() => {
            res.send('Produto cadastrado com sucesso!')
        }).catch((err) => {
            res.send('Houve um erro ao tentar salvar o produto, tente novamente!<br>Erro: ' + err)
        })
    }
})

// Consultando produtos
router.get('/consulta/:codigo', (req, res) => {

    Produto.findOne({codigo:req.params.codigo}).lean().then((produto) => {
        return res.json(produto)
    }).catch((err) => {
        res.send('Não há nenhum produto com o código informado em nosso banco de dados')
    })
})

// Editando produtos
router.put('/editar/:codigo', (req, res) => {

    var erros = validaCNPJ(req.body.cnpj)

    if(erros.length > 0){
        res.send(erros)

    }else{
        Produto.findOne({codigo:req.params.codigo}).then((produto) => {

            produto.codigo = req.body.codigo
            produto.nome = req.body.nome
            produto.cnpj = req.body.cnpj

            produto.save().then(() => {
                res.send('Produto editado com sucesso!')
            }).catch((err) => {
                res.send('Houve um erro ao tentar editar o produto, tente novamente!<br>Erro: ' + err)
            })
        }).catch((err) => {
            res.send('Não há nenhum produto com o código informado em nosso banco de dados')
        })
    }
})

// Excluindo produtos
router.delete('/deletar/:codigo', (req, res) => {
    Produto.deleteOne({codigo: req.params.codigo}).then(() => {
        res.send('Produto excluído com sucesso!')
    }).catch((err) => {
        res.send('Houve um erro ao tentar excluir o produto, tente novamente!<br>Erro: ' + err)
    })
})

module.exports = router