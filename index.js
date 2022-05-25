// External modules:
const inquirer = require("inquirer");
const rootMenu = require("./menus/rootMenu");
const { welcomeMessage, goodByeCow } = require("./cowMessages");


console.clear();
welcomeMessage();
rootMenu();
