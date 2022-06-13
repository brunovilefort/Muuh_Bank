/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem de saldo insuficiente: */
module.exports =
    function notEnoughBalanceMessage(accountType) {
        return console.log(
            cowsay.say({
                text: chalk.italic.red `Saldo insuficiente na sua ${accountType}, trem ta feio pro seu lado!.`,
                e: "xX",
                T: " U"
            })
        );
    };