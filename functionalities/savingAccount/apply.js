/* Variáveis: */
const fs = require("fs");
const {
    applySuccessMessage,
    amountNullMessage,
    notEnoughBalanceMessage,
    savingAccountMessage,
} = require("../../cowMessages");
/* Fim variáveis: */

/*Função depósito: */
module.exports = function apply(amount) {
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
                /* Validações valor nulo ou negativo: */
                if (amount < 0 || !amount) {
                    console.clear();
                    amountNullMessage();
                    setTimeout(() => {
                        require("../../menus/operationType")("aplicar", "3");
                    }, 4000);
                    /* Validação saldo insuficiente na conta corrente: */
                } else if (amount > account[key].contaCorrente) {
                    console.clear();
                    notEnoughBalanceMessage("conta corrente");
                    setTimeout(() => {
                        console.clear();
                        savingAccountMessage();
                        require("../../menus/savingMenu")();
                    }, 4000);
                    /* Aplicação efetuada com sucesso: */
                } else {
                    account[key].contaCorrente -= amount;
                    account[key].poupanca += amount;
                    console.clear();
                    applySuccessMessage(amount);
                    setTimeout(() => {
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