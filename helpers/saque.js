const fs = require("fs");

function withdraw(conta, pathAccounts) {
    const getAccountJson = fs.readFileSync(`${pathAccounts}`, {
        enconding: "utf-8",
        flag: "r",
    });
    const accountBase = JSON.parse(getAccountJson);

    

    // altera o json e mostra
    accountBase.map((account) => {
        Object.keys(account).map((key) => {
            if (key == conta) {
                // Chama verificação
                account[key].poupanca += 900;
                console.log(account[key].poupanca);
                return account[key];
            }
        })
    })

    // Não vai precisar
    // mostra a conta toda atualizada
    // accountBase.map((account) => {
    //     Object.keys(account).filter((key) => {
    //         if (key == conta) {
    //             console.log(account[key]);
    //         }
    //     })
    // })


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

withdraw("11", "../../accounts/accounts.json")