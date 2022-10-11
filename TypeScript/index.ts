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
