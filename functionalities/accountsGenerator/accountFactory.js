// Adicionar contas ao arquivo json.
module.exports = function accountFactory(codigo) {
    const AccountModel = {};
    AccountModel[codigo] = {
        contaCorrente: 0,
        poupanca: 0,
        logged: false,
    }
    return AccountModel;
};