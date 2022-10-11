var myName = "Jacob"; //declaring and defining our variable with a type
var myAge = 57;
//explicit assignment : declaringg the type, so typescript does not have to figure it out
//implicit assignment : do not declare the type, typescript has to guess
if (myAge < 18) {
    console.log("You are not allowed in the club.");
}
else if (myAge < 30) {
    console.log("You are allowed in the club with a young adult discount.");
}
else {
    console.log("You are allowed in the club for a full price.");
}

