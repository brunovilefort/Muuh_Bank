/* Variáveis: */
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
    cellPhoneInfo,
} = require("../infoRegister");
/* Fim variáveis. */

module.exports = async function cellPhone() {
    /* Perguntando dados pessoais: */
    try {
        const answer = await inquirer.prompt(cellPhoneInfo);
        const cellPhone = answer["cellPhone"];
        /* Verificação: */
        if (cellPhone.match(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)) {
            return cellPhone;
        } else {
            console.log(chalk.red("Verifique o número, logo em seguida se inseriu os '( )' e o '-'."));
            await require("../index").cellPhone();
        };
        /* Fim verificação. */
    } catch (err) {
        console.log("Erro no arquivo cellPhone, pasta login/registerData/registerFunctions:", err);
    };
    /* Fim dados pessoais. */
};