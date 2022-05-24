const inquirer = require("inquirer");

module.exports = function withdrawOrDeposit(operationType, functionality) {
    inquirer.prompt([
        {
            type: "number",
            name: "amount",
            message: `Quanto deseja ${operationType}? "digite apenas números"\n`
        }
    ])
    .then((answer) => {
        const amount = answer[amount]; 
        functionality;
    })
    .catch((err) => console.log(err))
};