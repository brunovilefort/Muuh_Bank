// Get account:
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: "utf8",
        flag: "r",
    })
    return JSON.parse(accountJSON);
};