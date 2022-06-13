/* Variáveis: */
const inquirer = require("inquirer");
const operationType = require("./operationType");
const operationMessage = require("../cowMessages/operationMessage");
const getCurrentBalance = require("../functionalities/currentAccount/getCurrentBalance");
/* Fim variáveis. */

module.exports = function currentAccountMenu() {
    
    inquirer.prompt([{
            type: "list",
            name: "chosenOption",
            message: "Escolha uma das seguintes operações:",
            choices: [
                "Saque",
                "Depósito",
                "Consultar saldo",
                "Voltar ao menu principal"
            ],
        }, ])
        .then((answer) => {
            const chosenOption = answer["chosenOption"];
            switch (chosenOption) {
                case "Saque":
                    console.clear();
                    operationMessage();
                    operationType("sacar", "1");
                    break;
                case "Depósito":
                    console.clear()
                    operationMessage();
                    operationType("depositar", "2")
                    break;
                case "Consultar saldo":
                    console.clear();
                    getCurrentBalance();
                    break;
                case "Voltar ao menu principal":
                    console.clear();
                    /*Função rootMenu fica salvo na memória, não precisando salvar em nova variável para executar */
                    require("../cowMessages").backRootMenuMessage();
                    setTimeout(() => {
                        require("./rootMenu")();
                    }, 5000);
                    break;
            }
        })
        .catch((err) => console.log("Erro no arquivo currentAccountMenu na pasta menus:", err))
};