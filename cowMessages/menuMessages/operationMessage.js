/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem operações: */
module.exports = function operationMessage() {
    console.log(
        cowsay.say({
            text: chalk.green `Vamos falar de números, deixa de ser mão de VACA!`,
            e: "$$",
            T: " U"
        })
    );
};