const cowsay = require("cowsay");
const chalk = require("chalk");


/* Amount null message: */
module.exports =
    function amountNull() {
        return console.log(
            cowsay.say({
                text: chalk.red `Erro no sistema, valor nulo ou negativo.`,
                e: "xx",
                T: " U"
            })
        );
    };