// Verify if user press enter without put some value:

module.exports = function emptyValue() {
    if (!amount) {
        console.log(
            cowsay.say({text: chalk.bgRed.black`Ocorreu um erro, tente mais tarde!`, e: "xx", T: " U"})
        );
       return      
    }
}