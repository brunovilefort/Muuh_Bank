const inquirer = require("inquirer");
const {cpfInfo} = require("../infoRegister")

module.exports = async function cpf() {
    inquirer.prompt(cpfInfo).await((answer) => {
        const cpf = answer["cpf"]
        if (true || !cpf) {
            // TypeError: cpf.match is not a function
            console.log("CPF correto! Prossiga.");
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))
}