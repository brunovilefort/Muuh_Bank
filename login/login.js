/* Variáveis: */
const inquirer = require("inquirer");
const {
    usernameInfo,
    passwordInfo,
} = require("./registerData/infoRegister");
const rootMenu = require("../menus/rootMenu");
const fs = require("fs");
const {
    loginMessage,
    wrongDataMessage,
} = require("../cowMessages");
/* Fim Variáveis. */

module.exports = async function login() {
    /* Mensagem inicial: */
    console.clear();
    loginMessage();
    /* Fim mensagem inicial.*/
    /* Acesando o banco de dados JSON: */
    const getAccountJson = fs.readFileSync(`${__dirname}/../functionalities/accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });
    const accountBase = JSON.parse(getAccountJson);
    /* Fim acessando banco de dados JSON. */
    /* Definindo todas contas como deslogadas: */
    const accountLogOff = accountBase.map((account) => {
        Object.keys(account).map((key) => {
            account[key].logged = false;
        });
        return account;
    })
    /* Fim definindo todas contas como deslogadas. */
    /* Login: */
    fs.writeFileSync(`../functionalities/accounts/accounts.json`, JSON.stringify(accountLogOff));
    try {
        const answerUsername = await inquirer.prompt(usernameInfo);
        const usernameData = answerUsername["username"];
        /* Verificação username: */
        const accountMatch = accountBase.map((account) => {
            return Object.keys(account).map((key) => {
                if (account[key].username == usernameData) {
                    return account;
                };
            })
        }).map(ac => (ac[0])).filter(Boolean);
        if (accountMatch) {
            const answerPassword = await inquirer.prompt(passwordInfo);
            const passwordData = answerPassword["password"];
            /* Verificação password: */
            if (accountMatch[0][Object.keys(accountMatch[0])].password == passwordData) {
                accountMatch[0][Object.keys(accountMatch[0])].logged = true;

                fs.writeFileSync(`../functionalities/accounts/accounts.json`, JSON.stringify(accountLogOff));
                console.clear();
                rootMenu();
            } else {
                console.clear();
                wrongDataMessage();
                setTimeout(() => {
                    login();
                }, 4000);
            }
            /* Fim verificação password. */
        } else {
            console.clear();
            wrongDataMessage();
            setTimeout(() => {
                login();
            }, 4000);
        }
        /* Fim verificação username. */
    } catch (err) {
        console.log("Erro no arquivo login, pasta login:", err);
    }
    /* Fim login. */
};