// Gera uma ID unica para a conta.

module.exports = function uniqueIdGenerator() {
    // Array de string
    let letter = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    letter = letter.split("");

    // Algoritmo de Fisher-Yates:
    function shuffleFisherYates() {
        let m = letter.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = letter[m];
            letter[m] = letter[i];
            letter[i] = t;
        };
        return letter;
    };

    // Unique key:
    let id = "";

    // Algoritmo de fisher-yates intercalo com números aleatórios de 0 a 9.
    for (let pos = 0; pos < 11; pos++) {
        if (id.length % 2 == 0) {
            shuffleFisherYates();
            id += letter[pos];
        } else {
            id += Math.floor(Math.random()*10+1)
            
        };
    };
    return id;
};