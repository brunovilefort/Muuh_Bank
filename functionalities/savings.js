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
            message: "\nFineza nos informar qual sua conta:"
        },
    ])
    .then((answer) => {
        const accountName = answer["accountName"]
        // Verify if account exists:
        if (!checkAcoount(accountName)) {
            return menu();
        }

        // Options:
        inquirer.prompt([
            {   
                type: "list",
                name: "chosenOption",
                message: "\nQual opção deseja escolher?",
                choices: [
                    "Depositar na poupança",
                    "Resgatar economias",
                    "Ver rendimentos"
                ],
            },
        ])
        .then((answer) => {
            const chosenOption = answer["chosenOption"]
            if (chosenOption === "Depositar na poupança") {
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
                })
                .catch((err) => console.log(err))
                  /* ================================================= */

            } else if (chosenOption === "Resgatar economias") {
                // Withdrawal of funds:
                inquirer.prompt([
                    {
                        name: "removeValue",
                        message: "\nQuanto você deseja resgatar da poupança?"
                    },
                ])
                .then((answer) => {
                    const removeValue = answer["removeValue"]
            
                    // Remove amount of funds:
                    withdrawFunds(accountName, removeValue);
                })
                .catch((err) => console.log(err))
                  /* ================================================= */

            } else if (chosenOption === "Ver rendimentos") {
            //Time investing money:
            currentPassiveIncome();
            }
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
};

  /* ================================================= */

// Remove an amount from current account:
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




// Withdrawal of funds:
function withdrawFunds(accountName, removeValue) {

    let accountData = getAccount(accountName);

    // Verify if the user has entered any value:
    if (!removeValue) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Ocorreu um erro, você não inseriu nenhum valor!\nVamos tentar novamente.`, e: "xx", T: " U"})
        );
        return saving();
    };

    // Verify account balance:
    if (accountData.balance < removeValue) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Saldo insuficiente na sua poupança.`,e: "xx"})
        );
        return operation();
    };
    /* ================================================================================== */
    let savingAccountData = getSavingAccount(accountName);


    // Saving account balance:
    savingAccountData.balance = parseFloat(savingAccountData.balance - parseFloat(removeValue));

    // Write in saving account file:
    fs.writeFileSync(
        `savingAccounts/${accountName}.json`,
        JSON.stringify(savingAccountData),
        function (err) {
            console.log(err);
        }
    )

    /* ================================================================================== */


    // Balance:
    accountData.balance = parseFloat(accountData.balance) + parseFloat(removeValue);

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

   
    console.log(
        cowsay.say({text: chalk.green`Resgate de R$${removeValue} da sua poupança!`, e: "$$"})
    );
    operation();
};


// Current Passive Income:
function currentPassiveIncome() {
    console.log(
        cowsay.say({text: chalk.green`Atualmente a taxa de rendimento do nosso banco se encontra perto da Selic em 12% a.a.`, e: "$$"})
    );
    let yield = 1000;
    let seconds = 0;
    let month = 1
    let intervalId = setInterval(() => {
        seconds += 2;
        console.log(`Após ${month} mês, o valor atual da sua conta subiu para ${yield} reais.\n`);
        month += 1;
        yield += 100
        if (seconds > 22) {
            clearInterval(intervalId);
        };
    }, 2000);
    setTimeout(() => {
        console.clear();
        operation();
    }, 34000)
};









module.exports = saving;