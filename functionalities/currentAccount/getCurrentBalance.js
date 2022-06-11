const fs = require("fs");

module.exports = function savingBalance(conta) {
    
    const getAccountJson = fs.readFileSync(`../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });
    const accountBase = JSON.parse(getAccountJson);

    // mostra saldo
    accountBase.map((account) => {
        Object.keys(account).filter((key) => {
            if (key == conta) {
                console.log(account[key].contaCorrente);
            }
        })
    })
}