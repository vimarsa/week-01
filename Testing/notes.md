# Testing

* Testing is an essential part of software development
* We use to ensure that our code meets client requirements
* **Exhaustive testing:**
    * Testing absolutely everything possible but cannot be done except...for the military, rocket science and surgery .. equipment.

## Unit testing
* Anything that can hold a value, interact with a value or even acknowledge a value is a unit.
    * e.g. variable, constant, if statement, array, function, object, class, queue, list, stack

## TDD (Test Driven Development)
* Application that has code created driven by the tests we write.
* Write test then code - to minimise bugs
```js
test('to check that a number is even', () => {
    numberChoice.assert(2).toBeEven()
    //if this returns true, the number is even
})
```

## Testing Processes
* ISTQB: testing certifications
* Mimic what we believe what the application is going to look like

* Setup process:
    * We as testers set up the environment needed for our test
* Teardown process:
    * We reset the environment needed for future tests

