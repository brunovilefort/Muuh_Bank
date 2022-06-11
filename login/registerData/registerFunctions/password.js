const inquirer = require("inquirer");
const {passwordInfo} = require("../infoRegister")

module.exports = async function password() {
    inquirer.prompt(passwordInfo).await((answer) => {
        const password = answer["password"]
        if (password.match(/^[0-9]{8,8}$/) || !password) {
            console.log("Senha verificada com sucesso! Pode fazer login.");
        } else {
            console.log("Senha incorreta, verifique se tem 8 dígitos sem caracteres especiais.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))
}