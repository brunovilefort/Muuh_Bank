/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem de credenciais de login erradas: */
module.exports =
    function wrongDataMessage() {
        return console.log(
            cowsay.think({
                text: chalk.redBright `Credenciais erradas, insira-as novamente:`,
                e: "xx",
            })
        );
    };