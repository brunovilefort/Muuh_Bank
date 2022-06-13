/* Variáveis: */
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
    usernameInfo,
} = require("../infoRegister");
/* Fim variáveis. */

module.exports = async function username() {
    /* Perguntando dados pessoais: */
    try {
        const answer = await inquirer.prompt(usernameInfo);
        const username = answer["username"];
        /* Verificação: */
        if (username.match(/^[a-zA-Z0-9]+$/)) {
            return username;
        } else {
            console.log(chalk.red("Verifique se o username possui apenas letras e números."));
            await require("../index").username();
        }
        /* Fim verificação. */
    } catch (err) {
        console.log("Erro no arquivo username, pasta login/registerData/registerFunctions:", err);
    };
    /* Fim dados pessoais. */
};