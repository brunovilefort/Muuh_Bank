// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

//Own modules:
const operation = require("../app");

// Function create account:
function createAccount() {
console.log(
chalk.bgGreen.black("Parabéns por escolher o nosso banco!")
);
console.log(
chalk.green("Defina as configurações da sua conta a seguir:")
);
buildAccount();
};

// Verify and build account:
function buildAccount() {
inquirer.prompt([
{
name: "accountName",
message: "Digite um nome para a sua conta:\n"
}
])
.then((answer) => {
const accountName = answer["accountName"]
console.info(accountName)

// Verify the database:
if (!fs.existsSync("accounts")) {
fs.mkdirSync("accounts");
};

// Verify file exisist:
if (fs.existsSync(`accounts/${accountName}.json`)) {
console.log(
chalk.bgRed.black.bold("Erro fatal! Esta conta já existe. Fineza escolher outro nome.")
);
buildAccount();
return
}; 

// Create account file:
fs.writeFileSync(
`accounts/${accountName}.json`,
`{"balance": 0}`,
function (err) {
console.log(err);
},
);

// Message success:
console.log(
chalk.green("Parabéns, sua conta foi criada com sucesso.")
);

// Function operation from ../app.js:
operation();
})
.catch((err) => console.log(err))
};

module.exports = createAccount;