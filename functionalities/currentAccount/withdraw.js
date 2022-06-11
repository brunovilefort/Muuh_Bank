const fs = require("fs");

module.exports = function withdraw(amount) {
    const getAccountJson = fs.readFileSync(`${__dirname}/../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    }).toString();
    const accountBase = JSON.parse(getAccountJson);

    accountBase.map((account) => {
        Object.keys(account).map((key) => {
            if (account[key].logged == true) {
                // Chama verificação
                if (account[key].contaCorrente < amount) {
                    console.log("saldo insuficiente");
                } else {
                    // Confirmar amount
                account[key].contaCorrente -= amount;
                console.log(account[key].contaCorrente);
                return account[key];
                }
            }
        })
    })




    
    return fs.writeFileSync(`${__dirname}/../accounts/accounts.json`, JSON.stringify(accountBase))
}