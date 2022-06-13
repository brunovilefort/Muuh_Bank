/* Variáveis: */
const inquirer = require("inquirer");
const chalk = require("chalk");

const {
    bornDateInfo,
} = require("../infoRegister");
/* Fim variáveis. */

module.exports = async function bornDate() {
    /* Perguntando dados pessoais: */
    try {
        const answer = await inquirer.prompt(bornDateInfo);
        const bornDate = answer["bornDate"];
        /* Verificação: */
        if (bornDate.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/)) {
            return bornDate;
        } else {
            console.log(chalk.red("Verifique a data e se inseriu as '/'."));
            await require("../index").bornDate();
        };
        /* Fim verificação. */
    } catch (err) {
        console.log("Erro no arquivo bornDate, pasta login/registerData/registerFunctions:", err);
    }
    /* Fim dados pessoais. */
};