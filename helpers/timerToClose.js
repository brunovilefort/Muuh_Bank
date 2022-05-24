// Timer to close

module.exports = function timerToClose() {
    return setTimeout(() => {
        console.clear();
        process.exit();
    }, 5000);
}