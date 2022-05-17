// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

//Own modules:
const operation = require("../app");

// Clear initial terminal:
console.clear();

// Function create account:
function createAccount() {
    console.log(
        chalk.bgGreen.black("Parabéns por escolher o nosso banco!")
    );
    console.log(
        chalk.green("Defina as configurações da sua conta a seguir:\n")
    );
    buildAccount();
};

// Verify and build account:
function buildAccount() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite um nome para a sua conta:",
        },
    ])
    .then((answer) => {
    const accountName = answer["accountName"]
    console.info(accountName)

    // Verify accounts database:
    if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
    };

    // Verify saving database:
    if (!fs.existsSync("savingAccounts")) {
        fs.mkdirSync("savingAccounts");
    };

    // Verify bank statements database:
    if (!fs.existsSync("bankStatements")) {
        fs.mkdirSync("bankStatements");
    };

    // Verify accounts file exisist:
    if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
            chalk.bgRed.black.bold("\nErro fatal! Esta conta já existe. Fineza escolher outro nome.\n")
        );
        buildAccount();
        return
    }; 

    // Verify saving file exisist:
    if (fs.existsSync(`savingaAccounts/${accountName}.json`)) {
        console.log(
            chalk.bgRed.black.bold("\nErro fatal! Esta conta já existe. Fineza escolher outro nome.\n")
        );
        buildAccount();
        return
    }; 

    // Verify bankStatements file exisist:
    if (fs.existsSync(`bankStatements/${accountName}.txt`)) {
        console.log(
            chalk.bgRed.black.bold("\nErro fatal! Esta conta já existe. Fineza escolher outro nome.\n")
        );
        buildAccount();
        return
    }; 

    // Create account file:
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
            console.log(err);
        },
    );

    // Create saving account file:
    fs.writeFileSync(
        `savingAccounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
            console.log(err);
        },
    );

    // Create bank statements file:
    fs.writeFileSync(
        `bankStatements/${accountName}.txt`,
        '{saldo: 0}',
        function (err) {
            console.log(err);
        },
    );

    // Message success:
    console.log(
        chalk.green("\nParabéns, sua conta foi criada com sucesso.")
    );

    // Function operation from ../app.js:
    setTimeout(() => {
        console.clear();
        operation();
        }, 2500); 
    })
    .catch((err) => console.log(err))
};

module.exports = createAccount;