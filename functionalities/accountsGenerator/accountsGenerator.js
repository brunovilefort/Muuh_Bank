// Modules:
const fs = require("fs");
const uniqueIdGenerator = require("./uniqueIdGenerator");
const accountFactory = require("./accountFactory");
const getAccountJson = require("./getAccountJson")

function accountsGenerator(user, password, nome, json) {

    // Retorna o arquivo JSON em forma de objeto JS.
    const accountBase = JSON.parse(getAccountJson);

    // Instanciando a conta.
    const createdAccount = accountFactory(user, password, nome);

    // Adicionando chave única:
    createdAccount.conta.uniqueId = uniqueIdGenerator()

    // Adicionando a conta ao array do json.
    console.log(createdAccount);
    accountBase.push(createdAccount);  

    return fs.writeFileSync(`../accounts/accounts.json`, JSON.stringify(accountBase));
};

accountsGenerator("bruno", "123", "Bruno Clara");