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