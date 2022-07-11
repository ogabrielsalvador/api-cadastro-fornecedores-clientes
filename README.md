# api-cadastro-fornecedores-clientes
 API desenvolvida em NodeJS e MondoDB que realiza o cadastro, edição, consulta e exclusão dos fornecedores e produtos.

# Requisitos
 Node ??
 MongoDB ??

# Instalação
 ??

# Como usar
 GET / Retorna uma lista de produtos

Resposta:

[
    {
        "codigo": "01234",
        "nome": "Tábua de Madeira",
        "cnpj": 11222555000199
    },
    {
        "codigo": "56789",
        "nome": "Queijo Caseiro",
        "cnpj": 77444222000155
    }
]

 GET /produto/:cnpj Retorna uma lista de produtos referentes ao cnpj especificado

Resposta:



 POST /produto/cadastro Cria um novo produto e retorna uma mensagem de confirmação

Corpo da solicitação:

Resposta:



 GET /produto/consulta/:codigo Retorna o produto referente ao código especificado

Resposta:



 PUT /produto/editar/:codigo Edita o produto referente ao código informado e retorna uma mensagem de confirmação

Corpo da solicitação:

Resposta:



 DELETE /produto/deletar/:codigo Deleta o produto referente ao código informado e retorna uma mensagem de confirmação

Resposta:



 GET /fornecedor Retorna uma lista dos fornecedores

Resposta:

[
    {
        "nome": "Madeira São José",
        "cnpj": 11222555000199
    },
    {
        "nome": "Queijo da Fazenda",
        "cnpj": 77444222000155
    }
]

 POST /fornecedor/cadastro Cria um novo fornecedor e retorna uma mensagem de confirmação

Corpo da solicitação:

Resposta:



 GET /fornecedor/consulta/:cnpj Retorna o fornecedor referente ao cnpj especificado

Resposta:



 PUT /fornecedor/editar/:cnpj Edita o fornecedor referente ao cnpj informado e retorna uma mensagem de confirmação

Corpo da solicitação:

Resposta:



 DELETE /fornecedor/deletar/:cnpj Deleta o fornecedor referente ao cnpj informado e retorna uma mensagem de confirmação

Resposta: