/* Variáveis: */
const shuffleFisherYates = require("./shuffleFisherYates");
/* Fim Variáveis. */

/* Gera uma ID única para a conta: */
module.exports = function uniqueIdGenerator() {
    /* Array de strings: */
    let letter = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    letter = letter.split("");
    /* Algoritmo fisher-yates: */
    let shuffle = shuffleFisherYates(letter);
    /* Unique key */
    let id = "";
    /* Gera uma chave de 5 letras e 5 números: */
    for (let pos = 0; pos < 11; pos++) {
        if (id.length % 2 == 0) {
            shuffle;
            id += letter[pos];
        } else {
            id += Math.floor(Math.random() * 10 + 1)
        };
    };
    return id;
    /* Fim gera uma ID única para a conta. */
};