/* Variáveis: */
const fs = require("fs");
const uniqueIdGenerator = require("./uniqueIdGenerator");
const accountFactory = require("./accountFactory");
const getAccountJson = require("./getAccountJson");
const register = require("../../login/register");
const login = require("../../login/login");
/* Fim variáveis. */

/* Gera a conta com os dados do register.js: */
module.exports = async function accountsGenerator() {
    /* Retorna o arquivo JSON em forma de Objeto: */
    const accountBase = JSON.parse(getAccountJson);
    /* Verificando a última key de conta no banco de dados JSON: */
    let maxCode = -1;
    accountBase.forEach(account => {
        let currentCode = +Object.keys(account)[0];
        if (maxCode < currentCode) {
            maxCode = currentCode;
        };
    });
    /* Fim verificando a última key de conta no banco de dados JSON. */
    /* Instanciando a conta: */
    const createdAccount = accountFactory(maxCode + 1);
    const accountData = await register();
    /* Adicionando chave única: */
    createdAccount[maxCode + 1].uniqueId = uniqueIdGenerator();
    /* Unindo accountFactory com os dados do registe.js: */
    Object.assign(createdAccount[maxCode + 1], accountData);
    /* Adicionando a conta ao banco de dados JSON: */
    accountBase.push(createdAccount);
    fs.writeFileSync(`${__dirname}/../accounts/accounts.json`, JSON.stringify(accountBase));
    /* Fim adicionando a conta ao banco de dados JSON: */
    /* Menu login: */
    login();
};