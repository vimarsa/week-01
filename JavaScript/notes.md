# JavaScript
* What are we going to cover?
    * What is JavaScript?
    * Conditionals
    * Loops
    * Switch cases
* Functions


## The Language
* JavaScript Flavours
    * Vanilla JS
    * React.JS
    * Angular.JS
    * Node.JS
    * Ember.JS
    * Vue.JS
    * Deno.JS
    * Express.JS
    * And many more ...


## Software Development
* The fundamentals remain the same throughout many of the languages


## Starting HTML file
* Start with exclamation mark
* Type source and choose the second one if we wish to attach js to the html

1. static: open with file explorer
2. dynamic: open with live server (changes automatically)


### Naming Conventions
* camel casing: Each new word except the first has a capital letter to start
    * eg: eachNewWordExceptTheFirstHasACapitalLetterToStart

* pascal casing: Each new word including the first has a capital letter to start
    * eg: EachNewWordIncludingTheFirstHasACapitalLetterToStart

* snake casing: Each new word is lower cased and separated by underscores_
    * eg: each_new_word_is_lower_cased_and_separated_by_underscores



### Convention.js
 ```js
let myName = "Vimarsa";
let sum = 12 + 12;
console.log(myName);
console.log(sum);

let myAge = 57
console.log(myAge)
myAge += 1
console.log(myAge)
myAge -= 1
console.log(myAge)

```


### Types of variables
``` js
let myName = "Vimarsa"; 
// variable is created called myName
// in that variable, we have stored the value Vimarsa

// Softly-typed language (dont have to declare the type of data used; we never specify it is a string)

// types of variables: strings, booleans, numbers (integers, double), undefined

let myAge = 22;
// number
let lightOn = true;
// boolean
let noValue = undefined;
// any 

// a variable is a value that can vary; can change name, age ,...
// js is less strict compared to other languages; can make mistakes and people can carry on 
// must use semi colon
```


### Constants
``` js
const dateOfBirth = "27 July 2000"
//constants cannot change
// 2/1/2000 difficult to determine whether the first entry is month or date
//by not giving users to input themselves, we use dropdown and not allow users to putt in things that are not wanted

console.log(dateOfBirth)
```


## Conditionals
* A block of code to make a decision based on a condition given to the blocl
* If a condition is true, a certain piece of code is run, if a condition is false, the piece of code is ignored and checked
``` js
let myAge = 105;

if (myAge < 18) 
{
    console.log("You are not allowed in the club.");
}

else if (myAge < 30)
{
    console.log("You are eligible for the young person's discount.");
}

else if (myAge < 50)
{
    console.log("You are allowed in the club. Full price.");
}

else if (myAge < 90)
{
    console.log("You are allowed in the club. Senior discount.");
}

else 
{
    console.log("You are allowed in the club.");
}
```

``` js
let myName = "Kate";

if (myName == "Jacob")
{
    console.log("Hello Jacob!");
}

else if (myName == "Anna")
{
    console.log("Hello Anna!");
}

else if (myName == "Tom")
{
    console.log("Hello Tom!");

}

else if (myName == "Mark")
{
    console.log("Hello Mark!");
}

else 
{
    console.log("You are not authorized to access this website.");
}
```

``` js
myName = "jesal"

switch (myName) {
    case "Moaaz":
        console.log("Hello, Moaaz!");
        break;

    case "Jesal":
    case "jesal":
    case "JESAL":
        console.log("Hello, Jesal!");
        break;

    case "Odelette":
        console.log("Hello, Odellete!");
        break;

    case "Elena":
        console.log("Hello, Elena!");

    default:
        console.log("You are not recognized!");
        break;
}
```
``` js
carBrand = "Mercedes"

switch (carBrand) {
    case "Mercedes":
    case "Audi":
    case "BMW":
        console.log("This is a German car brand.")
        break;
    
    case "Honda":
    case "Toyota":
        console.log("This is a Japenese car brand.")
        break;

    default:
        console.log("This car brand is not recognized.")
        break;
}
```


#### Tutorial
``` js
// favourite colour checker:
// we need a variable defining favourite colour
// we need an if statement to check the colour given againstt our options
// we need a switch statement to check the colour given against our options
// minimum of 3 colours to be checked in each condition 

//if statement

myColour = "Blue";

if (myColour == "Blue")
{
    console.log("The colour blue is part of the catalogue.");
}

else if (myColour == "Purple")
{
    console.log("The colour purple is part of the catalogue.");
}

else if (myColour == green)
{ 
    console.log("The colour green is part of the catalogue.");
}

else
{
    console.log("The colour chosen is not part of the catalogue.");
}
```

```js
//switch cases

myColour == "red"
switch (myColour)
{
    case "Blue":
    case "blue":
    case "BLUE":
    case "Green":
    case "green":
    case "GREEN":
    case "Purple":
    case "purple":
    case "PURPLE":
        console.log("The colour entered is part of the catalogue.");
        break;

    default:
        console.log("The colour chosen is not part of the catalogue.");
        break;
}
```


### Definition and declaration
* let myAge = 4 is a definition and a declaration of the variable
* let myAge is the declaration (to be used later to assign a value)
* myAge is the definition


## Operators
* Operators are sumbols that are ised to ensure efficiency in code and allow the developer to perform mathematical operations to our progra,


### Arithemetic
* +, -, /, *, ++. --. % (modulus)
1. Increment by 1 ++
2. Decrement by 1 --
3. % modulus returns the remainder after division


### Assignment
* =, +=, -=, /=, *=, %=


### comparison
* the comparison operators return either true or false
* <, >, <=, >=, ==


### Fun with Kudzai
``` js
let myAge = "57";

if (myAge === 57) // the value and the type that we give it
{
    console.log("You gave me the number 57.");
}

else if (myAge == "57") // the value othat we give it (does not matter the type)
{
    console.log("You are equal to the value 57.");
}

else
{
    console.log("Oh. noooo....");
}
```


## loops (while loops)
``` js
let myAge = 4;
let number = 0;
// 5, 13, 7, 88, 9

while (myAge < 97)
{
    console.log("Happy birthday, you are " + myAge + " years old.");
    myAge += 1;
    number += 1; 
    console.log(number); //shows number of times we wished happy birthday
}

//whilst the condition is less than the number it is being compared to, it will console log and add on to the myAge variable.
```

## Challenge
How do we decide whether a number is odd or even?
