const fs = require("fs");




function withdraw(conta) {
    const getAccountJson = fs.readFileSync(`../../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });
    const accountBase = JSON.parse(getAccountJson);



    // altera o json
    accountBase.map((account) => {
        Object.keys(account).map((key) => {
            if (key == conta) {
                // Chama verificação
                account[key].poupanca += 900;
                return account[key];
            }
        })
    })

    // mostra a conta toda atualizada
    accountBase.map((account) => {
        Object.keys(account).filter((key) => {
            if (key == conta) {
                console.log(account[key]);
            }
        })
    })


    // mostra saldo
    accountBase.map((account) => {
        Object.keys(account).filter((key) => {
            if (key == conta) {
                console.log(account[key].contaCorrente);
            }
        })
    })




    return fs.writeFileSync(`../../accounts/accounts.json`, JSON.stringify(accountBase))
}

withdraw("15");