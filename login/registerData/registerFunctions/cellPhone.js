const inquirer = require("inquirer");
const {cellPhoneInfo} = require("../infoRegister")

module.exports = async function cellPhone() {


    try {
        const answer = await inquirer.prompt(cellPhoneInfo)
        const cellPhone = answer["cellPhone"]
        if (true || cellPhone) {
            console.log("Deu certo");
            return cellPhone
        } else {
            console.log("Verifique se inseriu os dado corretamente.");
            await require("../index").cellPhone();
        }
    } catch (err) {
        console.log("erro arquivo cellPhone", err);
    }
}