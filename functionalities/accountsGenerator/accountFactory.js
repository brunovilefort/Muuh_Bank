// Adicionar contas ao arquivo json.
module.exports = function accountFactory(user, password, nome) {
    const AccountModel = {
        conta: { 
            nome: nome,
            contaCorrente: 0,
            poupanca: 0,
            usuario: user,
            senha: password,
        }
    }
    return AccountModel;
};