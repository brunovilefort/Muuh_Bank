/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem de despedida: */
module.exports =
    function welcomeMessage() {
        return console.log(
            cowsay.say({
                text: chalk.bgBlueBright `Obrigado por utilizar o Muuhbank!`,
                e: "^^"
            })
        );
    };