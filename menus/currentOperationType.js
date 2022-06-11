const inquirer = require("inquirer");
const deposit = require("../functionalities/currentAccount/deposit");
const withdraw = require("../functionalities/currentAccount/withdraw")


module.exports = function operationType(operationType, operationNumber) {
    inquirer.prompt([{
            type: "number",
            name: "amount",
            message: `Quanto deseja ${operationType}? "digite apenas números"\n`
        }])
        .then((answer) => {
            const amount = answer["amount"];
            switch (operationNumber) {
                case "1":
                    withdraw(amount);
                    break;
                case "2":
                    deposit(amount);
                    break
            }

        })
        .catch((err) => console.log(err))
};