const fs = require("fs");

module.exports = function savingBalance() {
    
    const getAccountJson = fs.readFileSync(`${__dirname}/../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    }).toString();
    const accountBase = JSON.parse(getAccountJson);

    accountBase.map((account) => {
        Object.keys(account).map((key) => {
            if (account[key].logged == true) {
                console.log(account[key].contaCorrente);
            }
        })
    })



}