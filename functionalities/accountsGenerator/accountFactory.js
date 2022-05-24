// Adicionar contas ao arquivo json.
module.exports = function accountFactory(user, password, nome, codigo) {
    const AccountModel = {};
    AccountModel[codigo] = {
        nome: nome,
        contaCorrente: 0,
        poupanca: 0,
        usuario: user,
        senha: password,
    }
    return AccountModel;
};