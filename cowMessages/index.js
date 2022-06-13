/* Variáveis: */
const goodByeMessage = require("./loginMessages/goodByeMessage");
const welcomeMessage = require("./loginMessages/welcomeMessage");
const currentAccountMessage = require("./menuMessages/currentAccountMessage");
const operationMessage = require("./menuMessages/operationMessage");
const backRootMenuMessage = require("./menuMessages/backRootMenuMessage");
const depositSuccessMessage =  require("./depositMessagens/depositSuccessMessage");
const amountNullMessage = require("./errorMessages/amountNullMessage");
const loginMessage = require("./loginMessages/loginMessage");
const wrongDataMessage = require("./errorMessages/wrongDataMessage");
const registerMessage = require("./loginMessages/registerMessage");
const rootMenuMessage = require("./menuMessages/rootMenuMessage");
const savingAccountMessage = require("./menuMessages/savingAccountMessage");
const applySuccessMessage = require("./depositMessagens/applySuccessMessage");
const notEnoughBalanceMessage = require("./errorMessages/notEnoughBalanceMessage");
const rescueSuccessMessage = require("./withdrawMessages/rescueSuccessMessage");
const withdrawSuccessMessage = require("./withdrawMessages/withdrawSuccessMessage");
const currentBalanceMessage = require("./balanceMessages/currentBalanceMessage");
const savingBalanceMessage = require("./balanceMessages/savingBalanceMessage");
/* Fim variáveis. */

/* Exportando variáveis: */
module.exports = {
    goodByeMessage,
    welcomeMessage,
    currentAccountMessage,
    operationMessage,
    backRootMenuMessage,
    depositSuccessMessage,
    loginMessage,
    wrongDataMessage,
    registerMessage,
    rootMenuMessage,
    savingAccountMessage,
    amountNullMessage,
    applySuccessMessage,
    notEnoughBalanceMessage,
    rescueSuccessMessage,
    withdrawSuccessMessage,
    currentBalanceMessage,
    savingBalanceMessage,
};
/* Fim exportando variáveis. */