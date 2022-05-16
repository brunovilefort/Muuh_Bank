// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

// Own modules:
const operation = require("../app");
const createAccount = require("./createAccount");
const getAccountBalance = require("./getAccountBalance").getAccountBalance
const { log } = require("console");
const checkAcoount = require("./deposit").checkAccount;
const addAmount = require("./deposit").addAmount;
const withdraw = require("./withdraw");
const menu = require("./getAccountBalance").menu
const getAccount = require("./deposit").getAccount

// Clear initial terminal:
console.clear();

// Welcome message:
console.log(
    cowsay.say({text: chalk.black.bgGreen`Bem-vindo à Muuh Poupança!
    \nEsqueça o porquinho em casa e confie seu dinheiro em nós!.`, e: "$$", T: " U"})
);

// Save some money and passiveincome:
function saving() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "\nEm qual conta de poupança deseja depositar?"
        },
    ])
    .then((answer) => {
        const accountName = answer["accountName"]
        // Verify if account exists:
        if (!checkAcoount(accountName)) {
            return menu();
        }

        // Deposit some money in the savings:
        inquirer.prompt([
            {
                name: "savingAmount",
                message: "\nQuanto você deseja depositar na poupança?"
            },
        ])
        .then((answer) => {
            const savingAmount = answer["savingAmount"]

            // Remove amount from account balance:
            removeSavingAmount(accountName, savingAmount);




            //Time investing money: falta colocar está no final da página
            
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}

// Helpers below

// Remove saving amount from current amount:
function removeSavingAmount(accountName, savingAmount) {
    let accountData = getAccount(accountName);

    // Verify if the user has entered any value:
    if (!savingAmount) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Ocorreu um erro, você não inseriu nenhum valor!\nVamos tentar novamente.`, e: "xx", T: " U"})
        );
        return saving();
    };

    // Verify account balance:
    if (accountData.balance < savingAmount) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Saldo insuficiente na sua conta corrente.`,e: "xx"})
        );
        return operation();
    };
    

    // Balance:
    accountData.balance = parseFloat(accountData.balance) - parseFloat(savingAmount);

    // Write in file account:
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    );
    
    // Get saving account:
    function getSavingAccount(accountName) {
        const savingAccountJSON = fs.readFileSync(`savingAccounts/${accountName}.json`, {
            encoding: "utf8",
            flag: "r",
        })
        return JSON.parse(savingAccountJSON);
    };

    let savingAccountData = getSavingAccount(accountName);


    // Saving account balance:
    savingAccountData.balance = parseFloat(savingAccountData.balance) + parseFloat(savingAmount);

    // Write in saving account file:
    fs.writeFileSync(
        `savingAccounts/${accountName}.json`,
        JSON.stringify(savingAccountData),
        function (err) {
            console.log(err);
        }
    )
    console.log(
        cowsay.say({text: chalk.green`Foi realizado um depósito de R$${savingAmount} da sua poupança!`, e: "$$"})
    );
    operation();
};





// Current Passive Income:
function currentPassiveIncome() {
    console.log("Atualmente a taxa de rendimento do nosso banco se encontra perto da Selic em 12% a.a.");
    let yield = savingAmount;
    yield += (yield / 100)
    console.log(yield.toFixed(2));
    let seconds = 0;
    let month = 1
    let intervalId = setInterval(() => {
        seconds += 2;
        console.log(`Após ${month} mês, o valor atual da sua conta subiu para ${yield} reais.`);
        month += 1;
        if (seconds >+ 24) {
            clearInterval(intervalId);
        };
    }, 2000);
};
































module.exports = saving;