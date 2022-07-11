# api-cadastro-fornecedores-produtos
 API desenvolvida em NodeJS e MondoDB que realiza o cadastro, edição, consulta e exclusão de fornecedores e produtos.

# Tecnologias usadas
 - NodeJS v16.15.0
 - MongoDB Shell v5.0.8

# Bibliotecas usadas
- body-parser ^1.20.0
- cors ^2.8.5
- express ^4.18.1
- mongoose ^6.4.3
- morgan ^1.10.0
- nodemon ^2.0.1

# Instalação
É preciso ter instalado em sua máquina 
<a href="https://nodejs.org/en/download/" target="_blank">**NodeJS**</a> e 
<a href="https://www.mongodb.com/try/download/community" target="_blank">**MongoDB**</a>. <br>
Após isso, vai ser preciso clonar o repositório. <br>
Por fim, execute no terminal o seguinte comando: <br>
```bash
    npm start
```

Com isso você terá o servidor rodando na url <a href="http://localhost:9797" target="_blank">**http://localhost:9797**</a>

# Métodos usados e suas funções

### Listando os produtos

 GET '/' Retorna uma lista de todos os produtos em ordem alfabética

**Resposta:**

```bash
[
    {
        "_id": "62cc2c5a625b6fa115f3e8a8",
        "codigo": "88FF55BB",
        "nome": "Barra de ferro",
        "cnpj": 99888777000144,
        "data": "2022-07-11T13:23:19.195Z",
        "__v": 0
    },
    {
        "_id": "62cc2c27625b6fa115f3e8a5",
        "codigo": "11FF00PP",
        "nome": "Parafuso",
        "cnpj": 99888777000144,
        "data": "2022-07-11T13:23:19.195Z",
        "__v": 0
    },
    {
        "_id": "62cc2c92625b6fa115f3e8ac",
        "codigo": "66MM22TT",
        "nome": "Tábua de madeira",
        "cnpj": 22111888000155,
        "data": "2022-07-11T13:23:19.195Z",
        "__v": 0
    }
]
```

### Listando os fornecedores

 GET '/fornecedor' Retorna uma lista de todos os fornecedores em ordem alfabética

**Resposta:**

```bash
[
    {
        "_id": "62cc2a54625b6fa115f3e88b",
        "nome": "Ferragens Don Juan",
        "cnpj": 99888777000144,
        "data": "2022-07-11T13:23:19.179Z",
        "__v": 0
    },
    {
        "_id": "62cc2a2b625b6fa115f3e888",
        "nome": "Madeireira São José",
        "cnpj": 22111888000155,
        "data": "2022-07-11T13:23:19.179Z",
        "__v": 0
    }
]
```

### Cadastrando novos fornecedores

 POST '/fornecedor/cadastro' Cria um novo fornecedor e retorna uma mensagem de confirmação

**Corpo da solicitação:**

```bash
{
        "nome": "Ferragens Don Juan",
        "cnpj": "99888777000144"
}
```

**Resposta:**

```bash
Fornecedor cadastrado com sucesso!
```

### Consultando um fornecedor específico

 GET '/fornecedor/consulta/:cnpj' Retorna o fornecedor referente ao CNPJ especificado

**Resposta:**

```bash
[
    {
        "_id": "62cc2a54625b6fa115f3e88b",
        "nome": "Ferragens Don Juan",
        "cnpj": 99888777000144,
        "data": "2022-07-11T13:23:19.179Z",
        "__v": 0
    }
]
```

### Editando um fornecedor específico

 PUT /fornecedor/editar/:cnpj Edita o fornecedor referente ao CNPJ informado e retorna uma mensagem de confirmação

**Corpo da solicitação:**

```bash
{
        "nome": "Ferragens Don Juan",
        "cnpj": "99888777000144"
}
```

**Resposta:**

```bash
Fornecedor editado com sucesso!
```

### Deletando um fornecedor específico

 DELETE /fornecedor/deletar/:cnpj Deleta o fornecedor referente ao CNPJ informado e retorna uma mensagem de confirmação

**Resposta:**

```bash
Fornecedor deletado com sucesso!
```
### Listando todos os produtos de um fornecedor específico

 GET '/produto/:cnpj' Retorna uma lista de todos os produtos de um fornecedor específico em ordem alfabética

**Resposta:**

```bash
[
    {
        "_id": "62cc2c5a625b6fa115f3e8a8",
        "codigo": "88FF55BB",
        "nome": "Barra de ferro",
        "cnpj": 99888777000144,
        "data": "2022-07-11T13:23:19.195Z",
        "__v": 0
    },
    {
        "_id": "62cc2c27625b6fa115f3e8a5",
        "codigo": "11FF00PP",
        "nome": "Parafuso",
        "cnpj": 99888777000144,
        "data": "2022-07-11T13:23:19.195Z",
        "__v": 0
    }
]
```

### Cadastrando novos produtos

 POST '/produto/cadastro' Cria um novo produto e retorna uma mensagem de confirmação

**Corpo da solicitação:**

```bash
{
        "codigo": "66MM22TT",
        "nome": "Tábua de madeira",
        "cnpj": "22111888000155"
}
```

**Resposta:**

```bash
Produto cadastrado com sucesso!
```

### Consultando um produto específico

 GET '/produto/consulta/:codigo' Retorna o produto referente ao código especificado

**Resposta:**

```bash
[
    {
        "_id": "62cc2c92625b6fa115f3e8ac",
        "codigo": "66MM22TT",
        "nome": "Tábua de madeira",
        "cnpj": 22111888000155,
        "data": "2022-07-11T13:23:19.195Z",
        "__v": 0
    }
]
```

### Editando um produto específico

 PUT /produto/editar/:codigo Edita o produto referente ao código informado e retorna uma mensagem de confirmação

**Corpo da solicitação:**

```bash
{
        "codigo": "66MM22TT",
        "nome": "Tábua de madeira",
        "cnpj": "22111888000155"
}
```

**Resposta:**

```bash
Produto editado com sucesso!
```

### Deletando um produto específico

 DELETE /produto/deletar/:codigo Deleta o produto referente ao código informado e retorna uma mensagem de confirmação

**Resposta:**

```bash
Produto deletado com sucesso!
```