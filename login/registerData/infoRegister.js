const inquirer = require("inquirer")

const fullNameInfo = [
    {
        type: "input",
        name: "fullName",
        message: "Por favor insira seu nome completo:\n",
    },
]

const cellPhoneInfo = [
    {
        type: "number",
        name: "cellPhone",
        message: "Por favor insira seu celular com DDD:\n",
    }
]

const emailInfo = [
    {
        type: "input",
        name: "email",
        message: "Por favor insira seu e-mail:\n",
    }
]

const cpfInfo = [
    {
        type: "number",
        name: "cpf",
        message: "Por favor insira seu cpf:\n",
    }
]

const bornDateInfo = [
    {
        type: "number",
        name: "bornDate",
        message: "Por favor insira sua data de nascimento (DD/MM/AAAA):\n",
    }
]

const usernameInfo = [
    {
        type: "input",
        name: "username",
        message: "Insira seu usuário:\n",
    },
]

const passwordInfo = [
    {
        type: "password",
        name: "password",
        message: "Insira sua senha de '8 dígitos':\n",
        mask: "*"
    }
]

module.exports = { fullNameInfo, cellPhoneInfo, emailInfo, cpfInfo, bornDateInfo, usernameInfo, passwordInfo };