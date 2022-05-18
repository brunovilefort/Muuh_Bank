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