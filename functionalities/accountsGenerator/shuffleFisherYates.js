/* Embaralha o array: */
module.exports = function shuffleFisherYates(letter) {
    /* Algoritmo de fisher-yates: */
    let m = letter.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = letter[m];
        letter[m] = letter[i];
        letter[i] = t;
    };
    return letter;
    /* Fim algoritmo de fisher-yates. */
};