const main = require("./main")


test("the person's employer is Deloitte", () => {
    expect(main.person.employer).toBe("Deloitte");
})

// TODO: Write a test OR two ... testing that you can retrieve a value from the object car

test("the car colour is army green", () => {
    expect(main.car.color).toBe("army green");
})  

test("the car make year is 2020", () => {
    expect(main.car.year).toBe("2020");
})
