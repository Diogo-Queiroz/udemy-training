/**
Function class from Udemy Devslopes
 */

var length1 = 15;
var width1 = 10;
var area1 = length1 * width1;
console.log(area1);

var length2 = 12;
var width2 = 14;
var area2 = length2 * width2;
console.log(area2);

function area(length, width) {
    return length * width;
}

var rectangleAreas = [];
rectangleAreas.push(area(15, 10));
rectangleAreas.push(area(12, 14));
rectangleAreas.push(area( 4,  5));
console.log(rectangleAreas);

var bankBalance = 500.00;

function makeTransaction(priceSale) 
{
    if (priceSale <= bankBalance)
    {
        bankBalance -= priceSale;
        console.log("Successfull purschase");
    }
    else 
    {
        console.log("Insuficient funds!");
    }
}

console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.32);

console.log(bankBalance);
makeTransaction(10.00);

console.log(bankBalance);
makeTransaction(479.00);