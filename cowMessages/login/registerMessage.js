const cowsay = require("cowsay");
const chalk = require("chalk");


// Register message:
module.exports = 
function registerMessage() {
    return console.log(
        cowsay.say({text: chalk.bgGreen.black`Vamos criar sua muuh conta!!`, e: "oO"})
    );
};