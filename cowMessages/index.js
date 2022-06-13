/* Variáveis: */
const goodByeMessage = require("./goodByeMessage");
const welcomeMessage = require("./login/welcomeMessage");
const currentAccountMessage = require("./menu/currentAccountMessage");
const operationMessage = require("./operationMessage");
const backRootMenuMessage = require("./menu/backRootMenuMessage");
const depositSuccess =  require("./depositMessagens/depositSuccess");
const amountNullMessage = require("./error/amountNullMessage");
const loginMessage = require("./login/loginMessage");
const wrongDataMessage = require("./error/wrongDataMessage");
const registerMessage = require("./login/registerMessage");
const rootMenuMessage = require("./menu/rootMenuMessage");
const savingAccountMessage = require("./menu/savingAccountMessage");
const applySuccess = require("./depositMessagens/applySuccess");
const notEnoughBalanceMessage = require("./error/notEnoughBalanceMessage");
/* Fim variáveis. */

/* Exportando variáveis: */
module.exports = {
    goodByeMessage,
    welcomeMessage,
    currentAccountMessage,
    operationMessage,
    backRootMenuMessage,
    depositSuccess,
    loginMessage,
    wrongDataMessage,
    registerMessage,
    rootMenuMessage,
    savingAccountMessage,
    amountNullMessage,
    applySuccess,
    notEnoughBalanceMessage,
};
/* Fim exportando variáveis. */