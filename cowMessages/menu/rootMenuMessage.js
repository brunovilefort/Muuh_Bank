const cowsay = require("cowsay");
const chalk = require("chalk");


// Root Menu message:
module.exports = 
function rootMenuMessage(name) {
    return console.log(
        cowsay.think({text: chalk.bgGreen.black`${name} você se encontra no menu principal!`, e: "^^"})
    );
};