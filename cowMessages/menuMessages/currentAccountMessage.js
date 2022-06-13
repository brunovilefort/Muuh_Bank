/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem menu conta corrente: */
module.exports = function currentAccountMessage() {
    return console.log(
        cowsay.think({
            text: chalk.italic.yellow `Você está na sua muuh conta corrente!`,
            e: "^^"
        })
    );
};