const inquirer = require("inquirer");
const { balanceMessage, operationMessage } = require("../cowMessages");
const rootMenu = require("./rootMenu.js");

module.exports = function savingMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "chosenOption",
            message: "Escolha uma das seguintes operações:",
            choices: [
                "Aplicar",
                "Resgatar",
                "Saldo",
                "Voltar ao menu principal"
            ],
        },
    ])
    .then((answer) => {
        const chosenOption = answer["chosenOption"];
        switch (chosenOption) {
            case "Aplicar":
                console.clear();
                operationMessage();
                currentOperationType("Aplicar")
                break;
            case "Resgatar":
                console.clear();
                operationMessage();
                currentOperationType("Resgatar")
                break;
            case "Saldo":
                console.clear();
                balanceMessage();
                break;
            case "Voltar ao menu principal":
                console.clear();
                rootMenu();
                break;
        }
    })
    .catch((err) => console.log(err))
};