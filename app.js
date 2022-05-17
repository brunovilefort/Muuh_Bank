// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");
// Clear initial terminal:
console.clear();

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
                "Poupança",
                "Extrato",
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
            const getAccountBalance = require("./functionalities/getAccountBalance").getAccountBalance;
            getAccountBalance();
        } else if (action === "Depositar") {
            const deposit = require("./functionalities/deposit").deposit;
            deposit();
        } else if (action === "Poupança") {
            const savings = require("./functionalities/savings").saving
            savings();
        } else if (action === "Sacar") {
            const withdraw = require("./functionalities/withdraw");
            withdraw();
        } else if (action === "Extrato") {
            /* =========================== FALTA CONTEÚDO ===================================== */
        } else if (action === "Sair") {
            console.clear();
            console.log(
                cowsay.say({text: chalk.bgBlueBright`Obrigado por utilizar o Muuhbank!`, e: "^^"})
            );
            function secondsBeforeClosing() {
                setTimeout(() => {
                    console.clear();
                    process.exit();
                }, 5000);
            };
            secondsBeforeClosing();
        }
    })
    .catch((err) => console.log(err))
};

module.exports = operation;