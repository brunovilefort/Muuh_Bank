const inquirer = require("inquirer")

const fullName = [
    {
        type: "input",
        name: "fullName",
        message: "Por favor insira seu nome completo:\n",
    },
]

const cellPhone = [
    {
        type: "number",
        name: "cellPhone",
        message: "Por favor insira seu celular com DDD:\n",
    }
]

const email = [
    {
        type: "input",
        name: "email",
        message: "Por favor insira seu e-mail:\n",
    }
]

const cpf = [
    {
        type: "number",
        name: "cpf",
        message: "Por favor insira seu cpf:\n",
    }
]

const bornDate = [
    {
        type: "number",
        name: "bornDate",
        message: "Por favor insira a sua data de nascimento:\n",
    }
]

const username = [
    {
        type: "input",
        name: "username",
        message: "Insira seu usuário:\n",
    },
]

const password = [
    {
        type: "password",
        name: "password",
        message: "Insira sua senha de '8 dígitos':\n",
        mask: "*"
    }
]

module.exports = {
    fullName,
    cellPhone,
    email,
    cpf,
    bornDate,
    username,
    password,
};