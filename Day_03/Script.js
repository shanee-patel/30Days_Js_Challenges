// Activity 1: If-else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 10;
if (number < 0) {
  console.log("Number is negative");
} else if (number > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is zero");
}
// Task 2: write a programe to check if a person is eligible to vote (age>=18) and log the result to the console
let age = 18;
if (age >= 18) {
  console.log("Elgible");
} else {
  console.log("Not Eligible");
}

//Activity 2: Nested If Else satatements
// task 3: write a program to find the largest of three numbers using nested if else statements.
let a = 0;
let b = 10;
let c = 20;
if (a > b && a > c) {
  console.log("a is greater");
} else if (b > c && b > a) {
  console.log("b is greater");
} else {
  console.log("c is greater");
}

//Activity 3: Switch Case
// task 4: write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.
let num = 2;
switch (num) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Write the number from 1 to 7");
}

//Task 5: Write a program that uses a switch case to assign a grade ('A','B',"C","D","F") based on a score and log the grade to the console
let score = 50;
switch (true) {
  case score > 80 && score <= 100:
    console.log("Grade: A");
    break;
  case score > 60 && score <= 80:
    console.log("Grade: B");
    break;
  case score > 40 && score <= 60:
    console.log("Grade: C");
    break;
  case score > 33 && score <= 40:
    console.log("Grade: D");
    break;
  case score > 0 && score < 33:
    console.log("Grade: F");
    break;
  default:
    console.log("Score is out of range");
}

//Activity 4: Conditional (ternary) Operator
// Task 6: write a programe that uses the ternary operator to check if a number is even or odd and log the result to the console.
let n = 10;
n % 2 == 0 ? console.log("Even") : console.log("Odd");


//Activity 5: Combinig Conditions
//task 7: write a programe to check if a year is aleap year using multiple conditions (divisible by 4, but not 100 unless also divisible by400) and log the result to the conole

let year = 5000;
if (year % 4 == 0) {
  if (year % 100 != 0) {
    console.log("Leap Year");
  } else if (year % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("Not Leap Year");
  }
} else {
  console.log("Not a Leap Year");
}