const inquirer = require("inquirer");
const {usernameInfo} = require("../infoRegister")

module.exports = async function username() {
    inquirer.prompt(usernameInfo).await((answer) => {
        const username = answer["username"]
        if (username.match(/^[a-zA-Z0-9]+$/) || !username) {
            console.log("Usuário válido!");
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))
}