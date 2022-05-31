const inquirer = require("inquirer");
const fs = require("fs");
const rootMenu = require("./rootMenu");
const currentOperationType = require("./currentOperationType");
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
                currentOperationType("sacar");
                break;
            case "Depósito":
                console.clear()
                operationMessage();
                currentOperationType("depositar")
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