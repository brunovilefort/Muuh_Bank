const inquirer = require("inquirer");
const {usernameInfo} = require("../infoRegister")

module.exports = async function username() {

    try {
        const answer = await inquirer.prompt(usernameInfo)
        const username = answer["username"]
        console.log(username);
        if (username.match(/^[a-zA-Z0-9]+$/) || username) {
            console.log("Usuário válido!");
            return username
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            await require("../index").username();
        }
    } catch (err) {
        console.log("erro no arquivo username", err);
    }




       
    
}