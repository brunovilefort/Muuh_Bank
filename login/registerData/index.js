/* Variáveis index.js: */
const username = require("./registerFunctions/username");
const email = require("./registerFunctions/email");
const bornDate = require("./registerFunctions/bornDate");
const cpf = require("./registerFunctions/cpf");
const cellPhone = require("./registerFunctions/cellPhone");
const fullName = require("./registerFunctions/fullName");
const password = require("./registerFunctions/password");
/* Fim variáveis index.js. */

/* Exportando variáveis: */
module.exports = { fullName, email, bornDate, cpf, cellPhone, username, password };
/* Fim exportando variáveis. */