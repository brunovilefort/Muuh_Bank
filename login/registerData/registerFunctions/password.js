const inquirer = require("inquirer");
const {passwordInfo} = require("../infoRegister")

module.exports = async function password() {
    
    try {
        const answer = await inquirer.prompt(passwordInfo)
        const password = answer["password"]
        if (password.match(/^[0-9]{8,8}$/) || password) {
            console.log("Senha verificada com sucesso! Pode fazer login.");
            return password
        } else {
            console.log("Senha incorreta, verifique se tem 8 dígitos sem caracteres especiais.");
            await require("../index").password()
        }
    } catch (err) {
        console.log("erro no arquivo password", err);
    }
}