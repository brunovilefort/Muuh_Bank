const inquirer = require("inquirer");
const { fullNameInfo, cellPhoneInfo, emailInfo, cpfInfo, bornDateInfo, usernameInfo, passwordInfo } = require("./registerData/infoRegister");
const { bornDate, cellPhone, cpf, email, fullName, password, username } = require("./registerData/index");


module.exports = async function register() {
    const newAccount = {}
    newAccount.fullName = await fullName();
    newAccount.email = await email();
    newAccount.bornDate = await bornDate();
    newAccount.cpf = await cpf();
    newAccount.cellPhone = await cellPhone();
    newAccount.username = await username();
    newAccount.password = await password();
    return newAccount
};