const inquirer = require("inquirer");
const {username,password} = require("./infoRegister")

module.exports = function login() {
    inquirer.prompt(username).then((answer) => {
        const username = answer["username"]
         /*
        validação usuário
        */
        inquirer.prompt(password).then((answer) => {
            const password = answer["password"]
            /*
            validação senha
            Regex senha 8 dígitos, apenas numeros: /^[0-9]{8,8}$/
             */
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}