/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Voltar ao menu principal: */
module.exports =
    function backRootMenuMessage() {
        return console.log(
            cowsay.think({
                text: chalk.magenta `Estou te redirecionando para o menu principal...`,
                e: "ºº"
            })
        );
    };