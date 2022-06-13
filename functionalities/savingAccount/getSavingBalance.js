const fs = require("fs");
const savingBalanceMessage = require("../../cowMessages/index");

module.exports = function savingBalance(conta) {

    const getAccountJson = fs.readFileSync(`${__dirname}/../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    }).toString();
    const accountBase = JSON.parse(getAccountJson);

    accountBase.map((account) => {
        Object.keys(account).map((key) => {
            if (account[key].logged == true) {
                require("../../cowMessages").savingBalanceMessage(account[key].poupanca);
                setTimeout(() => {
                    require("../../menus/savingMenu")();
                }, 6000);
            }
        })
    })
};