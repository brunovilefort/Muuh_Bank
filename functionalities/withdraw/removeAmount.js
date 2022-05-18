function removeAmount(accountName, amount) {
    let accountData = getAccount(accountName);
    if (!amount) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Ocorreu um erro, tente mais tarde!`, e: "xx", T: " U"})
        );
        return menu();
    }

    // Verify account balance:
    if (accountData.balance < amount) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Saldo indisponível, tente um emprestimo ou procure um agiota.`})
        );
        return withdraw();
    }
    
    // Balance:
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    // Write in file account:
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    );
    console.log(
        cowsay.say({text: chalk.green`Foi realizado um saque de R$${amount} da sua conta!`, e: "$$"})
    );
    operation();
};