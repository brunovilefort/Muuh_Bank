const cowsay = require("cowsay");
const chalk = require("chalk");


// Login message:
module.exports = 
function loginMessage() {
    return console.log(
        cowsay.say({text: chalk.bgGreen.black`Por favor insira suas credenciais para entrar:`, e: "oo"})
    );
};