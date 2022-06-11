const inquirer = require("inquirer");
const {emailInfo} = require("../infoRegister")

module.exports = async function email() {
    inquirer.prompt(emailInfo).await((answer) => {
        const email = answer["email"]
        if (email.match(/\w+@\w+\.\w+/) || !email) {
            console.log("E-mail verificado");
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))
}