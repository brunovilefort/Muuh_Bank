const cowsay = require("cowsay");
const chalk = require("chalk");


// Current account menu message:
module.exports = function currentAccountMessage() {
    return console.log(
        cowsay.think({text: chalk.italic.yellow`Você está na sua muuh conta corrente!`, e: "^^"})
    );
};