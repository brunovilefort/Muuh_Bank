/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem saque efetuado com sucesso: */
module.exports =
    function withdrawSuccessMessage(amount) {
        return console.log(
            cowsay.say({
                text: chalk.green `Saque realizado com sucesso, no valor de ${amount} reais.`,
                e: "$$",
                T: " U"
            })
        );
    };