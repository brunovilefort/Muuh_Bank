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
                    "Resgatar economias"
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
            }
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
};