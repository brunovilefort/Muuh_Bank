// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

// Welcome message:
console.log(
    cowsay.say({text: chalk.bgGreen.black`Bem-vindo ao Muuhbank`, e: "^^"})
);

// Starting the options menu:
operation();

// Primary options:
function operation() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "O que deseja fazer?",
            choices: [
                "Criar Conta",
                "Consultar Saldo",
                "Depositar",
                "Sacar",
                "Sair"
            ],
        },
    ])
    .then((answer) => {
        const action = answer["action"]
        if (action === "Criar Conta") {
            const createAccount = require("./functionalities/createAccount");
            createAccount();
        } else if (action === "Consultar Saldo") {
            const getAccountBalance = require("./functionalities/getAccountBalance");
            getAccountBalance();
        } else if (action === "Depositar") {
            const deposit = require("./functionalities/deposit").deposit;
            deposit();
        } else if (action === "Sacar") {
            const withdraw = require("./functionalities/withdraw");
            withdraw();
        } else if (action === "Sair") {
            console.log(
                cowsay.say({text: chalk.bgBlueBright`Obrigado por utilizar o Muuhbank!`, e: "^^"})
            );
            process.exit();
        }
    })
    .catch((err) => console.log(err))
};

module.exports = operation;