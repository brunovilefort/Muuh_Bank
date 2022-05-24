const fs = require("fs");
const verifyEmptyValue = require("../../validations/verifyEmptyEntry");



function withdraw() {
    verifyEmptyValue();
    const getAccountJson = fs.readFileSync(`../../accounts/accounts.json`, {
        enconding: "utf-8",
        flag: "r",
    });
    const accountBase = JSON.parse(getAccountJson);

    return fs.writeFileSync(`../../accounts/accounts.json`, JSON.stringify(accountBase))
}

withdraw();