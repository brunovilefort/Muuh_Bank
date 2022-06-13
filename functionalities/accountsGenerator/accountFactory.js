/* Modelo conta para o banco de dados JSON: */
module.exports = function accountFactory(codigo) {
    const AccountModel = {};
    AccountModel[codigo] = {
        contaCorrente: 0,
        poupanca: 0,
        logged: false,
    };
    return AccountModel;
};