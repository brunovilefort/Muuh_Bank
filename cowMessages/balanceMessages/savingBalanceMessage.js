/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem saldo conta poupança: */
module.exports =
    function savingBalanceMessage(amount) {
        return console.log(
            cowsay.say({
                text: chalk.bold.greenBright `Você está cheio da grana, o saldo da poupança é de: ${amount} reais.`,
                e: "$$",
                T: " U"
            })
        );
    };