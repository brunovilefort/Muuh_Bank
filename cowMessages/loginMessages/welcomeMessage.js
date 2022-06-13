/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem de boas vindas: */
module.exports =
    function welcomeMessage() {
        return console.log(
            cowsay.say({
                text: chalk.bgGreen.black `Bem-vindo ao Muuhbank`,
                e: "^^"
            })
        );
    };