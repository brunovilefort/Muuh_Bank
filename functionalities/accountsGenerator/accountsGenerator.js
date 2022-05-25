// Modules:
const fs = require("fs");
const uniqueIdGenerator = require("./uniqueIdGenerator");
const accountFactory = require("./accountFactory");
const getAccountJson = require("./getAccountJson");

function accountsGenerator(user, password, nome, codigo) {

    // Retorna o arquivo JSON em forma de objeto JS.
    const accountBase = JSON.parse(getAccountJson);

    // Instanciando a conta.
    const createdAccount = accountFactory(user, password, nome, codigo);

    // Adicionando chave única:
    createdAccount[codigo].uniqueId = uniqueIdGenerator()

    

    // Adicionando a conta ao array do json.
    console.log(createdAccount["23"].nome);
    //accountBase.push(createdAccount);  

    return fs.writeFileSync(`../accounts/accounts.json`, JSON.stringify(accountBase));
};

accountsGenerator("bruno", 123, "bru", 23);