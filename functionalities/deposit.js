// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

// Own modules:
const operation = require("../app");

// Add an amount to muuh account:
function deposit() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua muuh conta?",
        },
    ])
    .then((answer) => {
        const accountName = answer["accountName"]

        // Verify if account exists:
        if (!checkAccount(accountName)) {
            return deposit();
        }

        // Add soma money to account:
        inquirer.prompt([
            {
                name: "amount",
                message: "Quanto deseja depositar?",
            },
        ])
        .then((answer) => {
            const amount = answer["amount"]

            // Add an amount:
            addAmount(accountName, amount);
            operation();
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
};


// Helpers below

// Verify account:
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
            chalk.bgRed.black(`Conta informada não existe!\n`)
        );
        return false;
    }
    return true;
};

// Add an amount:
function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    // Verify balance:
    if (!amount) {
        console.log(
            chalk.bgRed.black(`Informe um valor positivo!`)
        );    
        return deposit();
    };

    // Operator + is equal to Number():
    accountData.balance = +(amount) + +(accountData.balance);
    console.log(accountName, accountData);
    // Save in the account file:
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    )
    console.log(
        cowsay.say({text: chalk.green`Deposito realizado com sucesso, no valor de R${amount}.`, e: "$$", T: " U"})
    );
};

// Get account:
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: "utf8",
        flag: "r",
    })
    return JSON.parse(accountJSON);
};

module.exports = {
    deposit,
    checkAccount,
    getAccount,
};