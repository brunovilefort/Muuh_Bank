const inquirer = require("inquirer");
const {fullNameInfo} = require("../infoRegister")

module.exports = async function fullName() {
    inquirer.prompt(fullNameInfo).await((answer) => {
        const fullName = answer["fullName"]
        /* Validação */
        if (fullName.match(/^[A-Z][a-z]* [A-Z][a-z]*$/) || !fullName) {
            console.log("Nome verificado com sucesso.");
        } else {
            console.log("Insira um nome e sobrenome, com letras maiúsculas e separado por espaço.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))
}