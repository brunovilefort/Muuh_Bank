const inquirer = require("inquirer");
const {bornDateInfo} = require("../infoRegister")

module.exports = async function bornDate() {

    try {
        const answer = await inquirer.prompt(bornDateInfo)
        const bornDate = answer["bornDate"]
        if (bornDate.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/) || bornDate) {
            console.log("Data de nascimento verificada com sucesso.");
            return bornDate
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            await require("../index").bornDate();
        }
    } catch (err) {
        console.log("erro na arquivo", err);
    }
}

/*RegExp CPF*/
/* [0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2} */