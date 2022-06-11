const inquirer = require("inquirer");
const fs = require("fs");
const currentOperationType = require("./currentOperationType");
const operationMessage = require("../cowMessages/operationMessage")
const getCurrentBalance = require("../functionalities/currentAccount/getCurrentBalance")

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
                currentOperationType("sacar", "1");
                break;
            case "Depósito":
                console.clear()
                operationMessage();
                currentOperationType("depositar", "2")
                break;
            case "Consultar saldo":
                console.clear();
                getCurrentBalance();
                break;
            case "Voltar ao menu principal":
                console.clear();
                /*Função rootMenu fica salvo na memória, não precisando salvar em nova variável para executar */
                require("../cowMessages/backRootMenu")()
                require("./rootMenu")()
                break;
        }
    })
    .catch((err) => console.log(err))
};