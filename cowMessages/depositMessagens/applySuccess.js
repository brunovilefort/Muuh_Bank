const cowsay = require("cowsay");
const chalk = require("chalk");


/* Deposit Success: */
module.exports =
    function applySuccess(amount) {
        return console.log(
            cowsay.say({
                text: chalk.green `Dinheiro aplicado com sucesso, no valor de ${amount} reais.`,
                e: "$$",
                T: " U"
            })
        );
    };