// Crie uma função que recebe por parâmetros os dados enviados pelo formulário e faz a validação dos dados

var verificaCNPJ = function verificaCNPJ(cnpj){

    var erros = []

    // checando se o CNPJ informado segue o tamanho padrão
    if(cnpj.length != 14){
        erros.push({
            texto: 'O CNPJ informado não é válido.'
        })
    }

    return erros
}

module.exports = verificaCNPJ