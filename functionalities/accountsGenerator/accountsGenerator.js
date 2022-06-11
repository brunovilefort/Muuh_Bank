// Modules:
const fs = require("fs");
const uniqueIdGenerator = require("./uniqueIdGenerator");
const accountFactory = require("./accountFactory");
const getAccountJson = require("./getAccountJson");
const register = require("../../login/register");
const login = require("../../login/login")


module.exports = async function accountsGenerator() {

    // Retorna o arquivo JSON em forma de objeto JS.
    const accountBase = JSON.parse(getAccountJson);

    // Verificando o ultimo código
    let maxCode = -1;
    accountBase.forEach(account => {
        let currentCode = +Object.keys(account)[0]
        if (maxCode < currentCode) {
            maxCode = currentCode;
        }
    })

    // Instanciando a conta.
    const createdAccount = accountFactory(maxCode + 1);
    const accountData = await register()

    // Adicionando chave única:
    createdAccount[maxCode + 1].uniqueId = uniqueIdGenerator()

    // Unindo dados factory com dados pessoais
    Object.assign(createdAccount[maxCode + 1], accountData)

    // Adicionando a conta ao array do json.
    accountBase.push(createdAccount);

    fs.writeFileSync(`${__dirname}/../accounts/accounts.json`, JSON.stringify(accountBase));

    login()
};