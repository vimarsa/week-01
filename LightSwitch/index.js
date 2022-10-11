const body = document.body;
const headerOne = document.getElementById("headerOne");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");

let toggle = true;

buttonOne.addEventListener ("click", () => {

    if (toggle == true) {
        console.log("It is true.");
        body.style.backgroundColor = "black";
        headerOne.style.color = "white",
        toggle = false;
    }
    
    else {
        console.log("It is false.");
        body.style.backgroundColor = "white";
        headerOne.style.color = "black",      
        toggle = true;
    }
})


console.log(toggle + 1); //
console.log(typeof body);
console.log(typeof headerOne);
console.log(typeof buttonOne);

const lightBackground = () => {
    body.style.backgroundColor ="black";
    headerOne.style.color = "white";
}

const darkBackground = () => {
    body.style.backgroundColor ="white";
    headerOne.style.color = "black";
}





