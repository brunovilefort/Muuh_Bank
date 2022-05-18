// Get saving account:
function getSavingAccount(accountName) {
    const savingAccountJSON = fs.readFileSync(`savingAccounts/${accountName}.json`, {
        encoding: "utf8",
        flag: "r",
    })
    return JSON.parse(savingAccountJSON);
};