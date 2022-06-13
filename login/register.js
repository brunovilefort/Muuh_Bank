/* Variáveis: */
const {
    fullName,
    email,
    bornDate,
    cpf,
    cellPhone,
    username,
    password,
} = require("./registerData/index");
const {
    registerMessage,
} = require("../cowMessages");
/* Fim Variáveis. */

module.exports = async function register() {
    /* Mensagem inicial: */
    console.clear();
    registerMessage();
    /* Fim mensagem inicial.*/
    /* Criando nova conta: */
    const newAccount = {}
        newAccount.fullName = await fullName();
        newAccount.email = await email();
        newAccount.bornDate = await bornDate();
        newAccount.cpf = await cpf();
        newAccount.cellPhone = await cellPhone();
        newAccount.username = await username();
        newAccount.password = await password();
    return newAccount;
    /* Fim criando nova conta. */
};