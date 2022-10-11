# TypeScript

## JSON

* Key: Value pair documents
    * Color is the key
    * Red is the value
    *   eg. "color" : "red"

* **package.json** is a file that we create to start our projects
* to create our package.json, we run the following code in the root folder (TypeScript folder) of our project in the terminal
```npm
npm init -y
```
* The 'npm,' stands for Node Package Manager
    * init stands for initialization 
    * -y stands for 'yes' to all options (without -y, we have to manually type all the entries in the starting of package.json)

* npm install -g typescript : to install globally
* npm install typescript --save-dev : to install for just one project (safer option) = save to devdependencies
* npm i -g ts-node : compiles typescript into javascript and runs the same time
* To run, we use ts-node "file name" 
* .gitignore : required for each project

## Note for when downloading projects from a gift repo
* When a package.json has dependencies, you will need to install those packages to run the project. To do this, we run the following code:
```np
npm install
OR 
npm i
```

## Uninstall a package
* Sometimes, you don't need a package anymore or it has been installed incorrectly. We use the following code:
```npm
npm uninstall *package_name*
```

## Assignment
* explicit assignment : declaringg the type, so typescript does not have to figure it out
* implicit assignment : do not declare the type, typescript has to guess


## DRY Principle
* Do not repear yourself

## Functions
* A block of code that we can write once and call whenever we want
* We have different options for our functions:
    * We can return a value from a function to be used later on
```ts
    function subtraction(num1 : number , num2 : number)
{
    return num1 - num2
    //this value can be used but we have to store it somewhere
}

let answer: number = subtraction(10,20);
console.log(answer);
```

    * We can return no value using the **void** and display infromation using the console log
 ```ts
function birthday(): void 
{
    console.log("It is your " + myAgeNow + " birthday.");
    myAgeNow++;
}
```
    * We can declare a type for the function

### Keywords
* **void** means the function returns no value
* **return** stores the answer means we can assign to a variable and use it for future uses 


## Different ways to type in console
```ts
function information(firstName : string , lastName : string , age : number , location : string)
{
    console.log("Hi, I am " + firstName + " " + lastName +". I am " + age + " years old. I live in " + location + "." ); //first method
    console.log(`Hi, I am ${firstName} ${lastName}. I am ${age} years old. I live in ${location}.`); //second method
}

information("Vimarsa", "Sevaraja" , 22 , "Birmingham");
```

## Arrays
* they are a collection of variables to be displayed
* in js and ts, array can contain all kinds of objects; string, number, boolean, undefined
```ts
let person01 : string = "Jacob";
let person02 : string = "Elena";
let person03 : string = "Moaaz";
let person04 : string = "Tambo";

const listOfPeople = ["Jacob", "Elena", "Moaaz", "Tambo"];
console.log(listOfPeople[1]);
console.log("The number of people in the list is " + " " + listOfPeople.length);
console.log(`The number of people in the list is ${listOfPeople.length}`);

// Methods / functions to add, change and remove items from an array

//push will add item to array
listOfPeople.push("Odelette", "Ibti");
console.log(listOfPeople.length)

//pop will remove item from array
listOfPeople.pop();
console.log(listOfPeople);

for (let i = 0; i < listOfPeople.length; i++) //intialiser; condition; iterator
{
    console.log(listOfPeople[i]);
    // length of array is 5
    // we start with 0
    // 0 < 5 is true
    // 1 < 5 is true
    // 2 < 5 is true
    // 3 < 5 is true
    // 4 < 5 is true
    // the last index number is always going to be 1 less than the array length 
    // 0, 1, 2, 3, 4 are the index and 5 is the length
}

let i: number = 0
while (i < listOfPeople.length) {
    console.log(listOfPeople[i]);
    i++
}


let favouriteNumber : number = 40;

while (favouriteNumber < 10){
    console.log("Less than 10.");
    favouriteNumber += 1;
}

//a do while is guaranteed to run at least once evn if the condition is false
// 40 isnt less than 10 but it prints the code anyway

do {
    console.log("Less than 10.")
    favouriteNumber += 1;
} while (favouriteNumber < 10); // it would hit a maximum of amount of info we can see; twitter
```




//Challenge 01

* Create an array with you favourite Music artists, up to 10 artists
```js
let favMusArt1 : string = "Miley Cyrus";
let favMusArt2 : string = "Selena Gomez";
let favMusArt3 : string = "Justin Bieber";
let favMusArt4 : string = "Sid Sri Ram";
let favMusArt5 : string = "Adam Levine";
let favMusArt6 : string = "Katy Perry";
let favMusArt7 : string = "Adele";
let favMusArt8 : string = "Imagine Dragons";
let favMusArt9 : string = "Anirudh";
let favMusArt10 : string = "GV Prakash"; 

const listOfArtists = ["Miley Cyrus", "Selena Gomez", "Justin Bieber", "Sid Sri Ram", "Adam Levine", "Katy Perry", "Adele", "Imagine Dragons", "Anirudh", "GV Prakash"];
```

* Create a for loop to display these artists in a list
```js
for (let i = 0; i < listOfArtists.length; i++) {
    console.log(listOfArtists[i]);
}
```

* Create a while loop to display these artists in a list
```js
for (let i = 0; i < listOfArtists.length; i++) {
    console.log(listOfArtists[i]);
}
```

* Create a for in loop
```js
for (const item in listOfArtists)
{
    console.log(item)
}
```



//Challenge 02

* Explore different methods / functions inside of an array:
    * We have used push and pop
    ```js
    listOfArtists.push("Pradeep Kumar")
    console.log(listOfArtists)

    listOfArtists.pop();
    console.log(listOfArtists);
    ```

    * We also have reverse, shift, splice and others
    ```js
    let rev = listOfArtists.reverse();
    console.log(rev);

    let shift = listOfArtists.shift();
    console.log(shift);

    let splice = listOfArtists.splice(1, 3, "Mindy Gledhill");
    console.log(splice);

    let sort = listOfArtists.sort()
    console.log(sort);
    ```

    * MDN JavaScript Array Methods (exploration)


    * Use these methods on your favourite artists array




//Challenge 03
* We have used functions inside of TypeScript. JavaScript has a couple of different ways to create functions, one is called the arrow syntax function, how can we change the functions we made earlier into an arrow syntax function? 

```js
const subtraction = (numberOne, numberTwo) => 
{
    console.log(numberOne - numberTwo);
}

subtraction (10,5)
```

# OOP - Object Oriented Programming
## 4 Principles
* Abstraction
* Polymorphism
* Encapsulation
* Inheritance

# Procedural Programming

# Event-Driven Programming

# Functional Programming

let person01hairColour : string = "brunette"
let person01eyeColour : string = "green"
let person01Height : string = "180cm"
let person01Weight : string = "140lbs"

const employee01 =
{
    employeeNumber : 1,
    firstName : "Trey",
    lastName : "Smith",
    strength : 100,
    tiredness : 0,
    health : 100,

    fight() {
        this.health -= 40;
        this.tiredness += 20;
    },

    sleep() {
        this.health += 20;
        this.tiredness -= 10;
    }
}

console.log(employee01);
console.log(employee01.lastName);
console.log(employee01.tiredness);

console.log(employee01.fight);