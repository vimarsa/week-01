const functions = require ("./functions");

test("that withdraw function reduced the balance by the specified amount", () => {
    let total = functions.withdraw(50);
    expect(total).toBe(950);
})