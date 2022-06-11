const inquirer = require("inquirer");
const {bornDateInfo} = require("../infoRegister")

function bornDate() {
    inquirer.prompt(bornDateInfo).then((answer) => {
        const validation = new RegExp("[0-9]{2}[/][0-9]{2}[/][0-9]{4}")
        const bornDate = answer["bornDate"]
        if (!validation.test(bornDate)) {
            // TypeError: cpf.match is not a function
            console.log("Data de nascimento verificada com sucesso.");
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            // Lógica
        }
    })
    .catch((err) => console.log(err))
}

bornDate(24071999)

/*RegExp CPF*/
/* [0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2} */