const inquirer = require("inquirer");
const {cpfInfo} = require("../infoRegister")

module.exports = async function cpf() {


    try {
        const answer = await inquirer.prompt(cpfInfo)
        const cpf = answer["cpf"]
        if (true || cpf) {
            // TypeError: cpf.match is not a function
            console.log("CPF correto! Prossiga.");
            return cpf
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            await require("../index").cpf();
        }
   
    } catch (err) {
        console.log("erro no arquivo cpf", err);
    }




  
}