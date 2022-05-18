const fs = require("fs");

function accountsGenerator(nome, idade) {
    // Acessa o arquivo JSON e salva na variável accountJson "síncrono":
    const getAccountJson = fs.readFileSync(`../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });

    // Transforma o accounts.json em objeto.
    const account = JSON.parse(getAccountJson);

    // Adicionar contas ao arquivo json.
    account.push({
        nome: nome,
        idade: idade,
    })

    return fs.writeFileSync(`../accounts/accounts.json`, JSON.stringify(account));
};

accountsGenerator("Samuel",20);

// TA PRONTA PORRA!!