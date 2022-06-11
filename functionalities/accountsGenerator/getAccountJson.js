const fs = require("fs");

// Acessa o arquivo JSON e salva na variável accountJson.
const getAccountJson = fs.readFileSync(`${__dirname}/../accounts/accounts.json`, {
    enconding: "utf-8",
    flag: "r",
});

module.exports = getAccountJson;