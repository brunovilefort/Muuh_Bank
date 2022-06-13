/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem menu principal: */
module.exports =
    function rootMenuMessage(name) {
        return console.log(
            cowsay.think({
                text: chalk.bgGreen.black `${name} você se encontra no menu principal!`,
                e: "^^"
            })
        );
    };