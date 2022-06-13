/* Variáveis: */
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
    emailInfo,
} = require("../infoRegister");
/* Fim variáveis. */

module.exports = async function email() {
    /* Perguntando dados pessoais: */
    try {
        const answer = await inquirer.prompt(emailInfo);
        const email = answer["email"];
        /* Verificação: */
        if (email.match(/\w+@\w+\.\w+/)) {
            return email;
        } else {
            console.log(chalk.red("Verifique o e-mail, logo em seguida o '@' e o '.com':"));
            await require("../index").email();
        };
        /* Fim verificação. */
    } catch (err) {
        console.log("Erro no arquivo email, pasta login/registerData/registerFunctions:", err);
    };
    /* Fim dados pessoais. */
};