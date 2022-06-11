const goodByeMessage = require("./goodByeMessage");
const welcomeMessage = require("./welcomeMessage");
const currentAccountMessage = require("./currentAccountMessage");
const operationMessage = require("./operationMessage");
const balanceMessage = require("./balanceMessage");
const backRootMenu = require("./backRootMenu");
const depositSuccess =  require("./depositMessagens/depositSuccess");
const amountNull = require("./error/amountNull");


module.exports = {
    goodByeMessage,
    welcomeMessage,
    currentAccountMessage,
    operationMessage,
    balanceMessage,
    backRootMenu,
    depositSuccess,
};