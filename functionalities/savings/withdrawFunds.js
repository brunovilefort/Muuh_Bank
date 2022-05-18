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
    );

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
    
    console.log(
        cowsay.say({text: chalk.green`Resgate de R$${removeValue} da sua poupança!`, e: "$$"})
    );
    operation();
};