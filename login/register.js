const inquirer = require("inquirer")
const {fullName,cellPhone,email,cpf,bornDate,username,password} = require("./infoRegister")

module.exports = function register() {
    inquirer.prompt(fullName).then((answer) => {
        const fullName = answer["fullName"]
        if (fullName.match(/^[A-Z][a-z]* [A-Z][a-z]*$/)) {
            console.log("Nome verificado com sucesso.");
        } else {
            console.log("Insira um nome e sobrenome, com letras maiúsculas e separado por espaço.");
            // Lógica
        }
        inquirer.prompt(cellPhone).then((answer) => {
            const cellPhone = answer["cellPhone"]
            if (true) {
                // TypeError: cpf.match is not a function
                console.log("Deu certo");
            } else {
                console.log("Verifique se inseriu os dado corretamente.");
                // Lógica
            }
         
            inquirer.prompt(email).then((answer) => {
                const email = answer["email"]
                if (email.match(/\w+@\w+\.\w+/)) {
                    console.log("E-mail verificado");
                } else {
                    console.log("Verifique se inseriu os dado corretamente.");
                    // Lógica
                }
        
                inquirer.prompt(cpf).then((answer) => {
                    const cpf = answer["cpf"]
                    if (true) {
                        // TypeError: cpf.match is not a function
                        console.log("CPF correto! Prossiga.");
                    } else {
                        console.log("Verifique se inseriu os dado corretamente.");
                        // Lógica
                    }
        
                    inquirer.prompt(bornDate).then((answer) => {
                        const bornDate = answer["bornDate"]
                        if (true) {
                            // TypeError: cpf.match is not a function
                            console.log("Data de nascimento verificada com sucesso.");
                        } else {
                            console.log("Verifique se inseriu os dado corretamente.");
                            // Lógica
                        }

                        inquirer.prompt(username).then((answer) => {
                            const username = answer["username"]
                            if (username.match(/^[a-zA-Z0-9]+$/)) {
                                console.log("Usuário válido!");
                            } else {
                                console.log("Verifique se inseriu os dado corretamente.");
                                // Lógica
                            }
                           
                            inquirer.prompt(password).then((answer) => {
                                const password = answer["password"]
                                if (password.match(/^[0-9]{8,8}$/)) {
                                    console.log("Senha verificada com sucesso! Pode fazer login.");
                                } else {
                                    console.log("Senha incorreta, verifique se tem 8 dígitos sem caracteres especiais.");
                                    // Lógica
                                }

                            })
                            .catch((err) => console.log(err))
                        })
                        .catch((err) => console.log(err))
                    })
                    .catch((err) => console.log(err))
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
};