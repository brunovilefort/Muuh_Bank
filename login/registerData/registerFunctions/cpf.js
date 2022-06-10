const inquirer = require("inquirer");
const {cpfInfo} = require("../infoRegister")

module.exports = function cpf() {
    inquirer.prompt(cpfInfo).then((answer) => {
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