/* Variáveis: */
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
    passwordInfo,
} = require("../infoRegister");
/* Fim variáveis. */

module.exports = async function password() {
    /* Perguntando dados pessoais: */
    try {
        const answer = await inquirer.prompt(passwordInfo);
        const password = answer["password"];
        /* Verificação: */
        if (password.match(/^[0-9]{8,8}$/)) {
            return password;
        } else {
            console.log(chalk.red("Senha inválida, verifique se tem 8 dígitos sem caracteres especiais."));
            await require("../index").password();
        };
        /* Fim verificação. */
    } catch (err) {
        console.log("Erro no arquivo password, pasta login/registerData/registerFunctions:", err);
    };
    /* Fim dados pessoais. */
};