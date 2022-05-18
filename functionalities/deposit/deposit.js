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