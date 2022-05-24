const cowsay = require("cowsay");
const chalk = require("chalk");

// Message that appear when the user see your account balance:
module.exports = function balanceMessage() {
    console.log(
        cowsay.say({text: chalk.green`Vamos falar de números, deixa de ser mão de VACA!`, e: "$$", T: " U"})
    );
};