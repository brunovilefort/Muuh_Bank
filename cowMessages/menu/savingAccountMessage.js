const cowsay = require("cowsay");
const chalk = require("chalk");


// Saving account menu message:
module.exports = function savingAccountMessage() {
    return console.log(
        cowsay.think({text: chalk.italic.yellow`Você está na sua muuh poupança!`, e: "^^"})
    );
};