// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

// Own modules:
const operation = require("../app");
const createAccount = require("./createAccount");
const getSavingAccount = require("./savings").getSavingAccount
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

        // Secondary menu:
        inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "Nos informe qual conta deseja escolhe:\n",
                choices: [
                    "Conta Corrente",
                    "Conta Poupança",
                    "Voltar ao menu"
                ],
            },
        ])
        .then((answer) => {
            const options = answer["options"]

            if (options === "Conta Corrente") {
                const accountData = getAccount(accountName);
                console.log(
                    cowsay.say({text: chalk.bgBlue.white`Muuh, o saldo disponível é de R$${accountData.balance}`, e: "oO"})
                );
                operation();

            } else if (options === "Conta Poupança") {
                let savingAccountData = getSavingAccount(accountName);
                console.log(
                    cowsay.say({text: chalk.bgBlue.white`Muuh, o saldo disponível é de R$${savingAccountData.balance}`, e: "oO"})
                );
                operation();
            } else if (options === "Voltar ao menu") {
                console.clear();
                operation();
            }
        })
        .catch((err) => console.log(err))
     
    })
    .catch((err) => console.log(err))
};

// Interactive menu:
function menu () {
    inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "O que deseja fazer?\n",
            choices: [
                "Informar outra conta",
                "Criar nova conta",
                "Voltar ao menu"
            ],
        },
    ])
    .then((answer) => {
        const options = answer["options"]

        if (options === "Informar outra conta") {
            getAccountBalance();
        } else if (options === "Criar nova conta") {
            createAccount();
        } else if (options === "Voltar ao menu") {
            console.clear();
            operation();
        }
    })
    .catch((err) => console.log(err))
};


module.exports = {
    getAccountBalance,
    menu,
};