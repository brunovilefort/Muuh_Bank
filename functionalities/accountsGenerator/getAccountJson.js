/* Variável: */
const fs = require("fs");
/* Fim Variável. */

/* Acessa o banco de dados JSON: */
const getAccountJson = fs.readFileSync(`${__dirname}/../accounts/accounts.json`, {
    enconding: "utf-8",
    flag: "r",
});
/* Exportando variável: */
module.exports = getAccountJson;
/* Fim exportando variável. */