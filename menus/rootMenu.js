const inquirer = require("inquirer");
const { goodByeMessage, currentAccountMessage } = require("../cowMessages");
const timerToClose = require("../helpers/timerToClose");
const currentAccountMenu = require("./currentAccountMenu");
const savingMenu = require("./savingMenu")

module.exports = function rootMenu() {
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