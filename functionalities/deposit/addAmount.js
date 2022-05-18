// Add an amount:
function addAmount(accountName, amount) {
    let accountData = getAccount(accountName);

    // Verify balance:
    if (!amount) {
        console.log(
            chalk.bgRed.black(`Informe um valor positivo!`)
        );    
        return deposit();
    };

    // Operator + is equal to Number():
    accountData.balance = +(amount) + +(accountData.balance);
    // Save in the account file:
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    )
    console.log(
        cowsay.say({text: chalk.green`Depósito realizado com sucesso, no valor de R${amount}.`, e: "$$", T: " U"})
    );
};