/* Variáveis: */
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
    fullNameInfo,
} = require("../infoRegister");
/* Fim variáveis. */

module.exports = async function fullName() {
    /* Perguntando dados pessoais: */
    try {
        const answer = await inquirer.prompt(fullNameInfo);
        const fullName = answer["fullName"];
        /* Verificação: */
        if (fullName.match(/[A-Z][a-z]* [A-Z][a-z]*/)) {
            return fullName;
        } else {
            console.log(chalk.red("Verifique as letras maiúsculas e o espaço entre nome e o último sobrenome."));
            await require("../index").fullName();
        };
        /* Fim verificação. */
    } catch (err) {
        console.log("Erro no arquivo fullName, pasta login/registerData/registerFunctions:", err);
    };
    /* Fim dados pessoais. */
};