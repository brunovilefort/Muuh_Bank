/* Variáveis: */
const fullNameInfo = [{
    type: "input",
    name: "fullName",
    message: "Por favor insira seu nome e o último sobrenome (Fulano Silva):\n",
},];
const emailInfo = [{
    type: "input",
    name: "email",
    message: "Por favor insira seu e-mail (ciclano@muuh.com):\n",
},];
const bornDateInfo = [{
    type: "input",
    name: "bornDate",
    message: "Por favor insira sua data de nascimento (DD/MM/AAAA):\n",
},];
const cpfInfo = [{
    type: "input",
    name: "cpf",
    message: "Por favor insira seu cpf (000.000.000-00):\n",
},];
const cellPhoneInfo = [{
    type: "input",
    name: "cellPhone",
    message: "Por favor insira seu celular '(xx) 9xxxx-xxxx':\n",
},];
const usernameInfo = [{
    type: "input",
    name: "username",
    message: "Insira seu usuário:\n",
},];
const passwordInfo = [{
    type: "password",
    name: "password",
    message: "Insira uma senha de '8 dígitos':\n",
    mask: "*"
},];
/* Fim variáveis. */

/* Exportando variáveis: */
module.exports = {
    fullNameInfo,
    emailInfo,
    bornDateInfo,
    cpfInfo,
    cellPhoneInfo,
    usernameInfo,
    passwordInfo
};
/* Fim exportando variáveis. */