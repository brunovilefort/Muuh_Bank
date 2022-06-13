/* Variáveis: */
const inquirer = require("inquirer");
const {
    deposit,
    withdraw,
} = require("../functionalities/currentAccount");
const {
    rescue,
    apply,
} = require("../functionalities/savingAccount")
/* Fim variáveis. */



module.exports = function operationType(operationType, operationNumber) {
    inquirer.prompt([{
            type: "number",
            name: "amount",
            message: `Quantos reais deseja ${operationType}?"\n`
        }])
        .then((answer) => {
            const amount = answer["amount"];
            switch (operationNumber) {
                case "1":
                    withdraw(amount);
                    break;
                case "2":
                    deposit(amount);
                    break;
                case "3":
                    apply(amount);
                    break;
                case "4":
                    rescue(amount);
                    break;
            }

        })
        .catch((err) => console.log("Erro no arquivo operationType na pasta menus:", err));
};