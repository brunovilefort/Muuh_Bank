const cowsay = require("cowsay");
const chalk = require("chalk");


// Good Bye message:
module.exports = 
function welcomeMessage() {
    return console.log(
        cowsay.say({text: chalk.bgBlueBright`Obrigado por utilizar o Muuhbank!`, e: "^^"})
    );
};