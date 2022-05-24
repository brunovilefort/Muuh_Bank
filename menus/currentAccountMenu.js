const inquirer = require("inquirer");
const rootMenu = require("./rootMenu");
const withdrawOrDeposit = require("./withdrawOrDeposit");
const operationMessage = require("../cowMessages/operationMessage")

module.exports = function currentAccountMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "chosenOption",
            message: "Escolha uma das seguintes operações:",
            choices: [
                "Saque",
                "Depósito",
                "Consultar saldo",
                "Voltar ao menu principal"
            ],
        },
    ])
    .then((answer) => {
        const chosenOption = answer["chosenOption"];
        switch (chosenOption) {
            case "Saque":
                console.clear();
                operationMessage();
                withdrawOrDeposit("sacar");
                break;
            case "Depósito":
                console.clear()
                operationMessage();
                withdrawOrDeposit("depositar")
                break;
            case "Consultar saldo":
                console.clear();
                
                break;
            case "Voltar ao menu principal":
                console.clear();
                rootMenu();
                break;
        }
    })
    .catch((err) => console.log(err))
};