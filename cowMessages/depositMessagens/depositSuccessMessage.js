/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem depósito efetuado com sucesso: */
module.exports =
    function depositSuccessMessage(amount) {
        return console.log(
            cowsay.say({
                text: chalk.green `Depósito realizado com sucesso, no valor de ${amount} reais.`,
                e: "$$",
                T: " U"
            })
        );
    };