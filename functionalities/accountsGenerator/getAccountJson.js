const fs = require("fs");
// Acessa o arquivo JSON e salva na variável accountJson.

module.exports = function getAccountJson() {
    fs.readFileSync(`../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });

    return accountJson;
};