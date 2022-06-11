const inquirer = require("inquirer");
const {emailInfo} = require("../infoRegister")

module.exports = async function email() {
    
    try {
        const answer = await inquirer.prompt(emailInfo)
        const email = answer["email"]
        if (email.match(/\w+@\w+\.\w+/) || email) {
            console.log("E-mail verificado");
            return email
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            await require("../index").email()
        }
    } catch (error) {
        console.log("erro no arquivo email", err);
    }
}