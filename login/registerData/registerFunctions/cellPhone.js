const inquirer = require("inquirer");
const {cellPhoneInfo} = require("../infoRegister")

module.exports = async function cellPhone() {

    inquirer.prompt(cellPhoneInfo).await((answer) => {
        const cellPhone = answer["cellPhone"]
        if (true || !cellPhone) {
            // TypeError: cpf.match is not a function
            console.log("Deu certo");
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))

}