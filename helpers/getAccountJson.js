const fs = require("fs");

// Acessa o arquivo JSON e salva na variável accountJson.
module.exports = function getAccountJson(pathAccounts) {
    const getAccountJson = fs.readFileSync(pathAccounts, {
        enconding: "utf-8",
        flag: "r",
    });
}