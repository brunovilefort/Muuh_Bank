// Verify account:
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
            chalk.bgRed.black(`\nConta inexistente!\n`)
        );
        return false;
    }
    return true;
};
