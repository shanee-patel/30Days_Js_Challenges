//Activity 1: Arithmetic Operation
//Task 1: Write a program to add two numbers and log the resilut to the console
let number1 = 1 + 2
console.log(number1);

//Task 2: Write a program to subtract two numbers and log the resilut to the console
let number2 = 4 - 1
console.log(number2);

//Task 3: Write a program to Multiply two numbers and log the resilut to the console
let number3 = 3 * 3
console.log(number3);

//Task 4: Write a program to divide two numbers and log the resilut to the console
let number4 = 45 / 5
console.log(number4);

//Task 5: Write a program to remainder two numbers and log the resilut to the console
let number5 = 4 % 2
console.log(number5);


//Activity 2: Assignment Operators
//Task 6: use the += operator to add a number to a variable and log the result to the console
let number6 = 20;
number6 += 10;
console.log(number6);

//Task 7: use the = operator to add a number to a variable and log the result to the console
let number7 = 20;
number7 -= 10;
console.log(number7);

//Activity 3: comperison Operators
//Task 8:  write a program to compare two number using  > and < and log the result to the console


let Boys = 10;
let girls = 20;

let check1 = Boys > girls;
let check2 = Boys < girls;

console.log(check1);
console.log(check2);


//Task 9:  write a program to compare two number using  >= and =< and log the result to the console


let check3 = Boys >= girls;
let check4 = Boys <= girls;


console.log(check3);
console.log(check4);

//Task 10: Write a program to compare two numbwer using == and === and log the results to the console
let check5 = Boys == girls;
let check6 = Boys === girls;

console.log(check5);
console.log(check6);


//Activity 4 Logical Operators
//Task 11:  write a program that use the && operator to combine two condition and log the result to the console

let check7 = Boys && girls;

console.log(check7);


//Task 12:  write a program that use the || operator to combine two condition and log the result to the console

let check8 = Boys || girls

console.log(check8);

//Task 13: write a program that uses the ! operator to negate a conditon and log the result to the console

let check9 = !(Boys==girls)

console.log(check9);


// Activity 5: Ternary Operator
//Task 14: write a program that use the ternary operator to check ia a number is positive a negative and log the result to the console

let number8 = 5; 
let check10 = number8 === 0 ? "Zero" : number8 > 0 ? "Positive" : "Negative";

console.log(check10);