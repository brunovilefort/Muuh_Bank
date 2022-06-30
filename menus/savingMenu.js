/* Variáveis: */
const inquirer = require("inquirer");
const {
    operationMessage,
} = require("../cowMessages");
const operationType = require("./operationType");
/* Fim variáveis. */


module.exports = function savingMenu() {
    inquirer.prompt([{
            type: "list",
            name: "chosenOption",
            message: "Escolha uma das seguintes operações:",
            choices: [
                "Aplicar",
                "Resgatar",
                "Consultar saldo",
                "Voltar ao menu principal"
            ],
        }, ])
        .then((answer) => {
            const chosenOption = answer["chosenOption"];
            switch (chosenOption) {
                case "Aplicar":
                    console.clear();
                    operationMessage();
                    operationType("aplicar", "3")
                    break;
                case "Resgatar":
                    console.clear();
                    operationMessage();
                    operationType("resgatar", "4")
                    break;
                case "Consultar saldo":
                    console.clear();
                    require("../functionalities/savingAccount").getSavingBalance();
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
        .catch((err) => console.log("Erro no arquivo savingMenu na pasta menus:", err))
};