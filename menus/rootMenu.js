const inquirer = require("inquirer");
const { goodByeMessage, currentAccountMessage } = require("../cowMessages");
const timerToClose = require("../helpers/timerToClose");
const currentAccountMenu = require("./currentAccountMenu");
const savingMenu = require("./savingMenu")
const fs = require("fs")

module.exports = function rootMenu() {
   /* Daqui  */
    const getAccountJson = fs.readFileSync(`${__dirname}/../functionalities/accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    }).toString();
    
    JSON.parse(getAccountJson).map((account) => {
        Object.keys(account).map((key) => {
            if (account[key].logged == true) {
                // Chama verificação
                console.log(account[key].fullName);
            }
        })
    })
    /* Ate aqui mostra o usuario que está logado */
    inquirer.prompt([
        {
            type: "list",
            name: "chosenOption",
            message: "Escolha uma das opções a seguir:",
            choices: [
                "Acessar conta corrente",
                "Acessar poupança",
                "Sair"
            ],
        },
    ])
    .then((answer) => {
        const chosenOption = answer["chosenOption"];
        switch (chosenOption) {
            case "Acessar conta corrente":
                console.clear();
                currentAccountMessage();
                currentAccountMenu();
                break;
            case "Acessar poupança":
                savingMenu();
                break;
            case "Sair":
                console.clear();
                goodByeMessage();
                timerToClose();
                break;
        }
    })
    .catch((err) => console.log(err))
};