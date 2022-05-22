const shuffleFisherYates = require("./shuffleFisherYates");

// Gera uma ID unica para a conta.
module.exports = function uniqueIdGenerator() {

     // Array de string
     let letter = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
     letter = letter.split("");

    // Algoritmo de Fisher-Yates:
    let shuffle = shuffleFisherYates(letter);
1    
    // Unique key:
    let id = "";

    // Algoritmo de fisher-yates intercalo com números aleatórios de 0 a 9.
    for (let pos = 0; pos < 11; pos++) {
        if (id.length % 2 == 0) {
            shuffle;
            id += letter[pos];
        } else {
            id += Math.floor(Math.random()*10+1)
            
        };
    };
    return id;
};