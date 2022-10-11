const headerOne = document.getElementById("headerOne");
const headerTwo = document.getElementById("headerTwo");
const headerThree = document.getElementById("headerThree");
const button = document.getElementById("button")

headerOne.style.color = "crimson";
headerOne.style.fontSize = "20px";
headerOne.style.textDecoration = "underline";


let number = 0;

button.addEventListener("click", () => {
    if (number >= 10)
    {
        number = -1;
    }
    number ++;
    headerThree.textContent = number;
})



