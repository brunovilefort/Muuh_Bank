const cowsay = require("cowsay");
const chalk = require("chalk");


/* Not enough balance message: */
module.exports =
    function notEnoughBalanceMessage() {
        return console.log(
            cowsay.say({
                text: chalk.italic.red `Saldo insuficiente na sua conta corrente, trem ta feio pro seu lado!.`,
                e: "xX",
                T: " U"
            })
        );
    };