/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem menu poupança: */
module.exports = function savingAccountMessage() {
    return console.log(
        cowsay.think({
            text: chalk.italic.yellow `Você está na sua muuh poupança!`,
            e: "^^"
        })
    );
};