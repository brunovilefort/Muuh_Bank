/* Variáveis: */
const inquirer = require("inquirer");
const login = require("./login");
const register = require("../functionalities/accountsGenerator/accountsGenerator");
const {
  welcomeMessage,
  goodByeMessage,
} = require("../cowMessages");
const timerToClose = require("../helpers/timerToClose");
/* Fim Variáveis. */

function start() {
  /* Mensagem inicial: */
  console.clear();
  welcomeMessage();
  /* Fim mensagem inicial.*/
  /* Menu inicial: */
  inquirer.prompt([{
      type: "rawlist",
      name: "enter",
      message: "Escolha uma das opções abaixo para se conectar:\n",
      choices: [{
          name: "Entrar",
          value: "login",
        },
        {
          name: "Registrar",
          value: "register",
        },
        {
          name: "Sair\n",
          value: "exit",
        },
      ],
    }])
    .then((answer) => {
      const chosenOption = answer["enter"];
      switch (chosenOption) {
        case "login":
          login();
          break;
        case "register":
          register();
          break;
        case "exit":
          console.clear();
          goodByeMessage();
          timerToClose();
          break;
      };
    })
    .catch((err) => console.log("Erro no arquivo openBankApp, pasta login:", err))
  /* Fim menu inicial. */
};

// Inicialização do programa:
start()