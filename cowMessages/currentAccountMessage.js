const cowsay = require("cowsay");
const chalk = require("chalk");


// Current account menu message:
module.exports = function currentAccountMessage() {
    return console.log(
        cowsay.say({text: chalk.bgGreen.black`Você se encontra na sua muuh conta corrente!`, e: "^^"})
    );
};