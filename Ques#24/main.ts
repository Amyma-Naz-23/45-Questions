//Ques#24 More Conditional Tests: 

let girl :string ="amyma";
let newgirl :string ="SANIA";
let four :number = 4;
let eight :number = 8;
let makeup : string[] =["lipstick","powder","lipgloss","foundation"];
//Tests for equality and inequality with strings
console.log("\n girl is equal to amyma");
console.log(girl == "amyma");
console.log("\n girl is not equal to amyma");
console.log(girl != "amyma");

//Tests using the lower case function
console.log("\n is sania is converting to lowercase");
console.log( newgirl.toLowerCase() =="sania");
console.log("\n is sania is converting to lowercase");
console.log(newgirl.toLowerCase() != "sania");

// Numerical tests 
console.log("\n is 4 is not equal to 8");
console.log(four == eight);
console.log("\n four is equal to 4");
console.log(four == 4);
console.log("\n four is less then eight");
console.log( four <eight );
console.log("\n eight is greater then four");
console.log(eight > four);
console.log("\n 20 is less then or equal to four");
console.log(20 <= four);
console.log("\n 5 is greater then or equal to four");
console.log(5 <=four);

//Tests using "and" and "or" operators
console.log("\n this is a and && operator for true and false");
console.log(8 != four && 4 ==four);
console.log(four>eight && eight == four);
console.log("\n this is a or|| operator for true and false");
console.log(four==eight || eight>four);
console.log(5==four || eight!=eight);

// Test whether an item is in a array

console.log("\n this item is in array ")
console.log(makeup.includes("lipstick"));

//Test whether an item is not in a array

console.log("\n this item is not in array ")
console.log(!makeup.includes("lipstick"));
