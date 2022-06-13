/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem resgate efetuado com sucesso: */
module.exports =
    function rescueSuccessMessage(amount) {
        return console.log(
            cowsay.say({
                text: chalk.green `Resgate realizado com sucesso, no valor de ${amount} reais.`,
                e: "$$",
                T: " U"
            })
        );
    };