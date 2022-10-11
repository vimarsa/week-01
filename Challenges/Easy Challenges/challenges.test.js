const challenges = require("./challenges");

test ("that the withdrawMoney function reduces the current account balance by the specified amount", () => {
    let total = challenges.withdrawMoney(50);
    expect(total).toBe(950);
})