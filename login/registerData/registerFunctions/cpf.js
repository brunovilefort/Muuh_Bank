/* Variáveis: */
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
    cpfInfo,
} = require("../infoRegister");
/* Fim variáveis. */

module.exports = async function cpf() {
    /* Perguntando dados pessoais: */
    try {
        const answer = await inquirer.prompt(cpfInfo);
        const cpf = answer["cpf"];
        /* Verificação: */
        if (cpf.match(/^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/)) {
            return cpf;
        } else {
            console.log(chalk.red("Verifique o CPF e se inseriu os '.' e a '-'."));
            await require("../index").cpf();
        };
        /* Fim verificação. */
    } catch (err) {
        console.log("Erro no arquivo cpf, pasta login/registerData/registerFunctions:", err);
    };
    /* Fim dados pessoais. */
};