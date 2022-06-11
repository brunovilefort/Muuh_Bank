const inquirer = require("inquirer");
const { balanceMessage, operationMessage } = require("../cowMessages");

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
                /*Função rootMenu fica salvo na memória, não precisando salvar em nova variável para executar */
                require("../cowMessages/backRootMenu")()
                require("./rootMenu")()
                break;
        }
    })
    .catch((err) => console.log(err))
};