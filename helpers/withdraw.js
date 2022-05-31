const fs = require("fs");

module.exports = function withdraw(conta) {
    const getAccountJson = fs.readFileSync(`../../accounts/accounts.json`, {
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
    return fs.writeFileSync(`../../accounts/accounts.json`, JSON.stringify(accountBase))
}