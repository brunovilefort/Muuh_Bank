/* Variáveis: */
const inquirer = require("inquirer");
const {
    goodByeMessage,
    currentAccountMessage,
    rootMenuMessage,
    savingAccountMessage,
} = require("../cowMessages");
const timerToClose = require("../helpers/timerToClose");
const currentAccountMenu = require("./currentAccountMenu");
const savingMenu = require("./savingMenu");
const fs = require("fs");
/* Fim variáveis. */

module.exports = function rootMenu() {
    console.clear();
    /* Exibir o nome do usuário logado: */
    const getAccountJson = fs.readFileSync(`${__dirname}/../functionalities/accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    }).toString();

    JSON.parse(getAccountJson).map((account) => {
        Object.keys(account).map((key) => {
            if (account[key].logged == true) {
                rootMenuMessage(account[key].fullName);
            }
        })
    })
    /* Fim exibir o nome do usuário logado. */
    /* Menu principal */
    inquirer.prompt([{
            type: "list",
            name: "chosenOption",
            message: "Escolha uma das opções a seguir:",
            choices: [
                "Acessar conta corrente",
                "Acessar poupança",
                "Sair",
            ],
        }, ])
        .then((answer) => {
            const chosenOption = answer["chosenOption"];
            switch (chosenOption) {
                case "Acessar conta corrente":
                    console.clear();
                    currentAccountMessage();
                    currentAccountMenu();
                    break;
                case "Acessar poupança":
                    console.clear();
                    savingAccountMessage();
                    savingMenu();
                    break;
                case "Sair":
                    console.clear();
                    goodByeMessage();
                    timerToClose();
                    break;
            }
        })
        .catch((err) => console.log("Erro no arquivo rootMenu na pasta menus:", err))
    /* Fim menu principal. */
};