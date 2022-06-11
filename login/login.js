const inquirer = require("inquirer");
const {
    usernameInfo,
    passwordInfo
} = require("./registerData/infoRegister")
const rootMenu = require("../menus/rootMenu")
const fs = require("fs")
// const getAccountJson = require(`../functionalities/accounts/accounts.json`)

module.exports = async function login() {

    const getAccountJson = fs.readFileSync(`${__dirname}/../functionalities/accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });

    const accountBase = JSON.parse(getAccountJson);

    // muda o status de logado
    const accountLogOff = accountBase.map((account) => {
        Object.keys(account).map((key) => {
            // Chama verificação
            account[key].logged = false;
        })
        return account
    })


    /* Arruamr nome */
    fs.writeFileSync(`../functionalities/accounts/accounts.json`, JSON.stringify(accountLogOff))

    try {
        const answerUsername = await inquirer.prompt(usernameInfo)
        const usernameData = answerUsername["username"]
        //  verificaão usuário
        const accountMatch = accountBase.map((account) => {
            return Object.keys(account).map((key) => {
                // Chama verificação
                if (account[key].username == usernameData) {
                    return account
                }
            })
        }).map(ac => (ac[0])).filter(Boolean)


        if (accountMatch) {
            const answerPassword = await inquirer.prompt(passwordInfo)
            const passwordData = answerPassword["password"]
            console.log()
            if (accountMatch[0][Object.keys(accountMatch[0])].password == passwordData) {
                accountMatch[0][Object.keys(accountMatch[0])].logged = true

                fs.writeFileSync(`../functionalities/accounts/accounts.json`, JSON.stringify(accountLogOff))
                console.log("Deu certo");
                rootMenu()

            } else {
                console.log("credenciais erradas");
                login()
            }
        } else {
            console.log("credenciais erradas");
            login()
        }
    } catch (err) {
        console.log("Erro no arquivo login", err);
    }



}