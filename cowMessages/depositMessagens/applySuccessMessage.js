/* Variáveis: */
const cowsay = require("cowsay");
const chalk = require("chalk");
/* Fim variáveis. */

/* Mensagem aplicação efetuada com sucesso: */
module.exports =
    function applySuccessMessage(amount) {
        return console.log(
            cowsay.say({
                text: chalk.green `Dinheiro aplicado com sucesso, no valor de ${amount} reais.`,
                e: "$$",
                T: " U"
            })
        );
    };