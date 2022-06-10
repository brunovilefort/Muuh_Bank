const inquirer = require("inquirer");
const {bornDateInfo} = require("../infoRegister")

module.exports = function bornDate() {
    inquirer.prompt(bornDateInfo).then((answer) => {
        const bornDate = answer["bornDate"]
        if (true || !bornDate) {
            // TypeError: cpf.match is not a function
            console.log("Data de nascimento verificada com sucesso.");
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))
}