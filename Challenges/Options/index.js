let userPin = 1234;

let userInput;

function options() {
    userInput = prompt("Please choose an option: \n 1. Beat Jesal up \n 2. Beat him up again \n 3. Console Jesal after his beatings");

    if (userInput == 1) {
        console.log("pow.");
    }
    else if (userInput == 2){
        console.log("kablam");
    }
    else if (userInput == 3){
        console.log("Calm down.");
    }
    else {
        console.log("Choose an option.");
        options();
    }
}

options()


let accountBalance = 10;

if (userPin == 1234){
    withdraw(5);
}

function withdraw(amount){
    accountBalance -= amount;
    console.log(`Your account balance is ${accountBalance}`);
}

let checkBalance = withdraw(5);
console.log(checkBalance);