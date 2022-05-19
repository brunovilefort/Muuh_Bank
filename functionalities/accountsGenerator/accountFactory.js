const uniqueIdGenerator = require("./uniqueIdGenerator")

// Adicionar contas ao arquivo json.
module.exports = function accountFactory(user, password, nome) {
    let conta = {};

    conta.nome = nome;
    conta.uniqueId = uniqueId;
    conta.contaCorrente = 0;
    conta.poupanca = 0;
    conta.usuario = user;
    conta.senha = password;

    return conta;
};