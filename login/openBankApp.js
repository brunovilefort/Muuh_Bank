const inquirer = require("inquirer");
const login = require("./login");
const register = require("./register")

function start() {
  inquirer.prompt([
      {
          type: "rawlist",
          name: "enter",
          message: "Bem vindo ao muuh bank, escolha uma das opções abaixo para se conectar:\n",
          choices: [
            {
              name: "Sign In",
              value: "login",
            },
            {
              name: "Register",
              value: "register",
            },
            {
              name: "Leave\n",
              value: "exit",
            },
          ],
      }
  ])
  .then((answer) => {
      const chosenOption = answer["enter"]
      switch (chosenOption) {
          case "login":
              login()
              break;
          case "register":
              register();
              break;
          case "Leave":
              //logica
              break;
      }
  })
  .catch((err) => console.log(err))
}

// Inicialização do programa:
start()