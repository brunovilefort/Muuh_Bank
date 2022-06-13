const cowsay = require("cowsay");
const chalk = require("chalk");


// Back to root menu message:
module.exports = 
function backRootMenuMessage() {
    return console.log(
        cowsay.think({text: chalk.magenta`Estou te redirecionando para o menu principal...`, e: "ºº"})
    );
};