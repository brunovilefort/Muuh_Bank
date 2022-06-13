/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem saldo conta corrente: */
module.exports =
    function currentBalanceMessage(value) {
        return console.log(
            cowsay.say({
                text: chalk.bold.greenBright `Você está cheio da grana, o saldo da conta corrente é de: ${value} reais.`,
                e: "xx",
                T: " U"
            })
        );
    };