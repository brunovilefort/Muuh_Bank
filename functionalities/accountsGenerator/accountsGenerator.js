const fs = require("fs");
const uniqueIdGenerator = require("./uniqueIdGenerator");

function accountsGenerator(user, password, nome, json) {
    // Acessa o arquivo JSON e salva na variável accountJson "síncrono":
    const getAccountJson = fs.readFileSync(`../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });

    // Cria uma chave unica:
    let uniqueId = uniqueIdGenerator();
    

    // Transforma o accounts.json em objeto.
    const account = JSON.parse(getAccountJson);

    // Adicionar contas ao arquivo json.
    function accountFactory(user, password, nome) {
        let conta = {};
    
        conta.nome = nome;
        conta.uniqueId = uniqueId;
        conta.contaCorrente = 0;
        conta.poupanca = 0;
        conta.usuario = user;
        conta.senha = password;
    
        return conta;
    };
    
    // Instanciando a conta.
    json = accountFactory(user, password, nome)

    // Adicionando a conta ao array do json.
    account.push(json);  

    return fs.writeFileSync(`../accounts/accounts.json`, JSON.stringify(account));
};

accountsGenerator("xx",123,"igor", "conta02");