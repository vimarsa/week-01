// ## Functions
// * ViewBalance()
// * DepositMoney()
// * WithdrawMoney()
//     * Choose an amount
// * Print Receipt (wont be able to do this week)
// * Move money from current to savings

// ## Variables needed for user

// * UserInput - prompts
// * UserPin
// * Current Balance / User Balance
// * DepositAmount
// * WithdrawalAmount


let accountBalanceCurrent = 100; 
let accountBalanceSavings = 50;
let pinAttempts = 0;
let userInput;

function options(){

    userInput = prompt("Please enter your pin.")

    if (userInput == 1234) {
        console.log("Welcome to National Bank.");
        userInput = prompt("What do you wish to do today? \n 1. View balance \n 2. Deposit money \n 3. Withdraw money \n 4. Move money from current to savings");
        if (userInput == 1) {
            viewBalance();
        } else if (userInput == 2) {
            depositMoney();
        } else if (userInput == 3) {
            withdrawMoney();
        } else if (userInput == 4) {
            moveMoney();
    } else {
        console.log("Your PIN is not recognized. Try again.");
        options();

        while (pinAttempts < 3) {
            console.log("Please enter correct pin.");
            pinAttempts ++
        }
    }
}
}

options()

function viewBalance(){
    console.log(`Your account balance is ${accountBalanceCurrent}`);
}

function depositMoney(){
    console.log("Please insert cash into machine.");
    accountBalanceCurrent += userInput
    console.log(`Your account balance is now ${accountBalanceCurrent}.`)
}

function withdrawMoney(){
    userInput = prompt("How much would you like to withdraw?");
    accountBalanceCurrent -= userInput
    console.log(`Transaction successful. Your balance is now ${accountBalanceCurrent}. See you again!`);
}

function moveMoney(){
    userInput = prompt ("How much would you like to move?");
    accountBalanceCurrent -= userInput
    accountBalanceSavings += userInput
    console.log(`Transfer successful. Your current account has ${accountBalanceCurrent} while your savings account has ${accountBalanceSavings}. See you again!`);
}

accountBalanceCurrent = 100;
accountBalanceSavings = 50;

const viewBalance = (amount) => {
    accountBalanceCurrent += 0;
    return accountBalanceCurrent;
}

const depositMoney = (amount) => {
    accountBalanceCurrent += amount;
    return accountBalanceCurrent;
}

const withdrawMoney = (amount) => {
    accountBalanceCurrent -= amount;
    return accountBalanceCurrent
}

const moveMoney = (amount) => {
    accountBalanceCurrent -= amount;
    accountBalanceSavings += amount;
    return accountBalanceSavings
}

module.exports = {viewBalance, depositMoney, withdrawMoney, moveMoney}