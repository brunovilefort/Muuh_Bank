const inquirer = require("inquirer");
const { fullNameInfo, cellPhoneInfo, emailInfo, cpfInfo, bornDateInfo, usernameInfo, passwordInfo } = require("./registerData/infoRegister");
const { bornDate, cellPhone, cpf, email, fullName, password, username } = require("./registerData/index");


function register() {
    
    fullName();
    email();
    bornDate();
    cpf();
    cellPhone();
    username();
    password();
};

register()