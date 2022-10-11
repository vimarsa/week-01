let myArray = [1, 2, 3, 4, 5, 6];
let myNumber = 0; //simple variable creation

//toBe, toContain ... these are matchers! These are the methods we use to test our code in different ways / scenarios!

test('that my name is Jacob', () => {
    let name = "Jacob"
    //assertion is something that we believe to be true
    expect(name).toBe("Jacob"); //this should be true
})

test("that myArray contains the value 3", () => {
    expect(myArray).toContain(3);
})

test("that myArray's length is 3", () => {
    expect(myArray.length).toBe(6);
})

test("that myNumber after incrementing is equal to 1", () => {
    myNumber++
    expect(myNumber).toBe(1);
    //teardown - reset the variables we have modified back to their original value 
    myNumber = 0; // resets myNumber back to its original value
})
console.log(myNumber);

test("that myNumber after decrementing is equal to -1", () => {
    myNumber--
    expect(myNumber).toBe(-1);
    myNumber = 0; 
})
console.log(myNumber);

test("that myNumber is equal to 10", () => {
    myNumber = 10; //setup
    expect(myNumber).toBe(10);
    myNumber = 0; //teardown
})

