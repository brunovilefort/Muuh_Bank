// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

// Own modules:
const operation = require("../app");
const createAccount = require("./createAccount");
const deposit = require("./deposit").deposit;
const checkAccount = require("./deposit").checkAccount;
const getAccount = require("./deposit").getAccount;

// Show Muuh account balance:
function getAccountBalance() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?",
        },
    ])
    .then((answer) => {
        const accountName = answer["accountName"]

        // Verify if account exists:
        if (!checkAccount(accountName)) {
            return menu();
        };

        const accountData = getAccount(accountName);
        console.log(
            cowsay.say({text: chalk.bgBlue.white`Muuh, o saldo da sua conta é de R$${accountData.balance}`, e: "oO"})
        );
        operation();
    })
    .catch((err) => console.log(err))
};

function menu () {
    inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "O que deseja fazer?",
            choices: [
                "Informar outra conta",
                "Criar nova conta",
                "Voltar ao menu"
            ],
        },
    ])
    .then((answer) => {
        const options = answer["options"]
        switch(options) {
            case "Informar outra conta":
                getAccountBalance();
            break;
            case "Criar nova conta":
                createAccount();
            break;
            case "Voltar ao menu":
                operation();
            break;
            default:
                console.log(`Escolha uma das opções acima.`);
                menu();
        };
    })
    .catch((err) => console.log(err))
};


module.exports = getAccountBalance;