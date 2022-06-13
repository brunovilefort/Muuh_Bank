/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem valor nulo ou negativo: */
module.exports =
    function amountNullMessage() {
        return console.log(
            cowsay.say({
                text: chalk.red `Erro no sistema, valor nulo ou negativo.`,
                e: "xx",
                T: " U"
            })
        );
    };