const cowsay = require("cowsay");
const chalk = require("chalk");


/* Wrong Data null: */
module.exports =
    function wrongDataMessage() {
        return console.log(
            cowsay.think({
                text: chalk.redBright `Credenciais erradas, insira-as novamente:`,
                e: "xx",
            })
        );
    };