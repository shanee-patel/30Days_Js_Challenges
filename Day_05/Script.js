//Activity 1: Funcction Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

 function checkEven_Odd (number) {
    if (number % 2 === 0) {
      console.log(`${number} is even`)
    } else {
      console.log(`${number} is odd`)
    }
  };
  
  
//   checkEven_Odd(10); 
//   checkEven_Odd(15); 


//   const checkEvenOdd = function(number){
//     if(number%2 === 0){
//         console.log(`${number} is even`)
//     }
//     else{
//         console.log(`${number} is odd`)
//     }
//   };
//   checkEvenOdd(15);
  
  
// task 2: write a function to calculate the square of a number and return the result

// const calculateSquare = function (number) {
//     return number*number;
// };

// const result = calculateSquare(10)
// console.log(result);

// function calculateSquare (number){
//     return number*number;
// };
// const result = calculateSquare(8);
// console.log(result)

//Activity 2 Function Expression
// Task 3: write a function Expression to find the maximum of two numbers and log the result to the console.

function maxNumber (number1, number2){
    if(number1> number2){
        console.log(`${number1} is greater`)
    }
    else{
        console.log(`${number2} is greater`)
    }
};
maxNumber(4,2);

//Task 4: write a function expression to concatenate two string and return the result

// const concatenateTwoString = function(string1, string2){
//     // return string1.concat(string2);
//     return string1 + string2;
// }

// const result = concatenateTwoString("hello","shanee");
// console.log(result);

// Activity 3: Arrow Function
// task 5: write an arrow function to calculate the sum of two numbers and return the result
 const calculateSum =(a,b)=>{
    return a+b;
 }
 console.log(calculateSum(3,8));

 // task 6: write an arrow function to check if a string contains a specific charcter and return a boolean value

 const containsChar = (str, char) => str.includes(char);
console.log(containsChar("hello", "n"))

//Activity 4 Function Parameters and Default Values
//task 7: write a arrow function that take two parameter and reutrn their product procide a default value for the second parameter

const Product = (a, b=5)=>{
    return a*b;
}
console.log(Product(5));
console.log(Product(9))


//Task 8: write a function that takes a person name and age and return a greeting message provide a defult value for the age

const greetingMsg =(name, age =21)=>{
    return `good morning ${name}`
}
console.log(greetingMsg("shanee"))

//Activity 5: Higher-Order Functions
// task 9: Write a higher -order function that takes a function and a number, and calls the function that amny times

const repeat =(fun, times)=>{
    for(let i=1; i<=times; i++){
        fun();
    }
}


const repeatFunction = ()=>{
    console.log("Shanee");
}

repeat(repeatFunction,5);

// task 10: write a higher -oreder function that takes two functions and a valaue , applies the first function to the value, and then applies the second function to the result

// const mainFunction =(fn1, fn2) => value => fn2(fn1(value))
// const fn1=(num)=> num+10;
// const fn2=(num)=> num*10;

// console.log(mainFunction(fn1,fn2));

const compose = (func1, func2) => value => func2(func1(value));
// Define two simple functions
const double = x => x * 2;
const square = x => x * x;

// Compose the functions: square after doubling
const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3));  // Output: 36
// Explanation: double(3) is 6, then square(6) is 36

// Compose the functions: double after squaring
// const squareThenDouble = compose(square, double);

// console.log(squareThenDouble(3));  // Output: 18
// Explanation: double(3) is 6, then square(6) is 36
