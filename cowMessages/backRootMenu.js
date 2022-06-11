const cowsay = require("cowsay");
const chalk = require("chalk");


// Welcome message:
module.exports = 
function backRootMenu() {
    return console.log(
        cowsay.say({text: chalk.bgGreen.black`Você voltou ao menu principal!`, e: "^^"})
    );
};