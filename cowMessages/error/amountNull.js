const cowsay = require("cowsay");
const chalk = require("chalk");


/* Amount null: */
module.exports =
    function amountNull() {
        return console.log(
            cowsay.say({
                text: chalk.green `ERROR, valor nulo ou negativo.`,
                e: "xx",
                T: " U"
            })
        );
    };