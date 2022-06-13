/* Variáveis: */
const fs = require("fs");
const {
    depositSuccessMessage,
    amountNullMessage,
} = require("../../cowMessages");
/* Fim variáveis: */

/*Função depósito: */
module.exports = function deposit(amount) {
    /* Acessa o banco de dados JSON: */
    const getAccountJson = fs.readFileSync(`${__dirname}/../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    }).toString();
    /* Transforma em objeto: */
    const accountBase = JSON.parse(getAccountJson);
    /* Verifica a conta atual: */
    accountBase.map((account) => {
        Object.keys(account).map((key) => {
            if (account[key].logged == true) {
                /* Validação saldo insuficiente na conta corrente: */
                if (amount < 0 || !amount) {
                    console.clear();
                    amountNullMessage();
                    setTimeout(() => {
                        require("../../menus/operationType")("depositar", "2");
                    }, 4000);
                    /* Depósito efetuado com sucesso: */
                } else {
                    account[key].contaCorrente += amount;
                    console.clear();
                    depositSuccessMessage(amount);
                    setTimeout(() => {
                        console.clear();
                        require("../../cowMessages").rootMenuMessage();
                        require("../../menus/rootMenu")();
                    }, 4000);
                    return account[key];

                };
            };
        });
    });
    /* Salva no banco de dados JSON: */
    return fs.writeFileSync(`${__dirname}/../accounts/accounts.json`, JSON.stringify(accountBase));
};