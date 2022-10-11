## Challenge 01
My electricity bills for the last six months have been 23, 32, 45, 59, 31 and 64 GBP.

What is the average monthly electricity bill over the six months period?
Write an expression to calculate the average, and store the result in a variable called 'averageElectricityBill'.


```ts
let month1: number = 23;
let month2: number = 32;
let month3: number = 45;
let month4: number = 59;
let month5: number = 31;
let month6: number = 64;

function averageElectricityBill(num1:number, num2:number, num3:number, num4:number, num5:number, num6:number)
{
    return ((num1+num2+num3+num4+num5+num6)/6);
}

let answer: number = averageElectricityBill((month1,month2,month3,month4,month5,month6)/6);
console.log(answer);
```


## Challenge 02
Please create 6 variables to hold these values. For example, month1, month2, month3, month4, month5, and month6.

Now, make the following changes to the monthly bill values before calculating the average bi-yearly bill:
* Increase the first month's bill to 3 times
* Add 10GBP to fifth month's bill
* Divide the last month's bill by 0.375

Calculate the average and use the console.log function to display the result.

```ts
month1 *= 3;
month5 += 10;
month5 /= 0.375;
let answer2: number = averageElectricityBill(month1,month2,month3,month4,month5,month6);
console.log(answer2);
```


## Question 3
In this question you're going to do some calculations for a tiler.
Two parts of a floor need tiling. One part is 9 tiles wide by 7 tiles long, the other is 5 tiles wide and 7 tiles long. Tiles come in packages of 6.

+ How many total tiles are needed? + You buy 17 packages of tiles containing 6 tiles each. How many tiles will be left over?

```ts
let totalTiles: number=(9*7)+(5*7);
let purchasedTiles: number=17*6;

console.log(purchasedTiles-totalTiles);
```
