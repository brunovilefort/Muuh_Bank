// Interactive sub menu:
function subMenu () {
    inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "O que deseja fazer?\n",
            choices: [
                "Informar outra conta",
                "Criar nova conta",
                "Voltar ao menu"
            ],
        },
    ])
    .then((answer) => {
        const options = answer["options"]

        if (options === "Informar outra conta") {
            getAccountBalance();
        } else if (options === "Criar nova conta") {
            createAccount();
        } else if (options === "Voltar ao menu") {
            console.clear();
            operation();
        }
    })
    .catch((err) => console.log(err))
};
