// global variables are the variables that are accessible to everything in the file

const { log } = require("console");

let name = "Jacob";
let age = 57; 
let location = "Manchester"

const display = () => {
    console.log(`Hi, I am ${firstname}. I am ${age} years old and I live in ${location}.`);
}


const localDisplay = () => {
    console.log(firstName);
}

display();
localDisplay();