const cowsay = require("cowsay");
const chalk = require("chalk");


/* Deposit Success: */
module.exports =
    function depositSuccess(amount) {
        return console.log(
            cowsay.say({
                text: chalk.green `Depósito realizado com sucesso, no valor de ${amount} reais.`,
                e: "$$",
                T: " U"
            })
        );
    };