// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

// Own modules:
const operation = require("../app");
const createAccount = require("./createAccount");
const getAccountBalance = require("./getAccountBalance");
const getAccount = require("./deposit").getAccount;
const checkAcoount = require("./deposit").checkAccount;

// Withdraw an amount from user account:
function withdraw() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?",
        },
    ])   
    .then((answer) => {
        const accountName = answer["accountName"]
        if (!checkAcoount(accountName)) {
            return withdraw();
        }

        inquirer.prompt([
            {
                name: "amount",
                message: "Quanto você deseja sacar?",
            },
        ])
        .then((answer) => {
            const amount = answer["amount"]

            // Remove amount from account balance:
            removeAmount(accountName, amount);
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
};

// Helper below:

function removeAmount(accountName, amount) {
    let accountData = getAccount(accountName);
    if (!amount) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Ocorreu um erro, tente mais tarde!`, e: "xx", T: " U"})
        );
        return menu();
    }

    // Verify account balance:
    if (accountData.balance < amount) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Saldo indisponível, tente um emprestimo ou procure um agiota.`})
        );
        return withdraw();
    }
    
    // Balance:
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    // Write in file account:
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    );
    console.log(
        cowsay.say({text: chalk.green`Foi realizado um saque de R$${amount} da sua conta!`, e: "$$"})
    );
    operation();
};

module.exports = withdraw;
