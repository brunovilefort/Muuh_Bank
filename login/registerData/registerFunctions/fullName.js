const inquirer = require("inquirer");
const {fullNameInfo} = require("../infoRegister")

module.exports = async function fullName() {

    try {
        const answer = await inquirer.prompt(fullNameInfo)
        const fullName = answer["fullName"]
        /* Validação */
        if (fullName.match(/[A-Z][a-z]* [A-Z][a-z]*/) || fullName) {
            console.log("Nome verificado com sucesso.");
            return fullName;
        } else {
            console.log("Insira um nome e sobrenome, com letras maiúsculas e separado por espaço.");
            fullName()
        }
    } catch (err) {
        console.log("Erro na função fullName, no arquivo fullName.js", err);
    }
}