//Activity 1: Understanding closures
//Task 1: write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outer() {
  let name = "Shanee patel";
  function inner() {
    console.log(name);
  }
  inner();
}

outer();

//Task 2: Create a closures that maintains a private counter. Implement functions to increment and get the current value of the counter.

// function increment(){
//   let number =0;
//   function privateCounter(){
//     number++;
//     console.log(number)

//   }
//   privateCounter()
//   privateCounter()
//   privateCounter()
// }
// increment()

function increment() {
  let number = 0;
  return {
    counter: function () {
      number++;
    },
    Value: function () {
      return number;
    },
  };
}

const result = increment();
result.counter();
result.counter();
result.counter();
console.log(result.Value());

//Activity 2:Practical Closures
//Task 3: Write a function that generates unique IDs. Use a closures to keep track of the last generated Id and increment it with each cell.

function uniqueID() {
  let id = 0;
  return function () {
    id++;
    let uniqueChar = "abc";
    return uniqueChar + id;
  };
}
const result1 = uniqueID();
console.log(result1());
console.log(result1());
console.log(result1());

//Task 4: Create a closures that captuers a user's name and returns a function that greets the user by name.

function Greets(name) {
  return function () {
    console.log(`Hello my name is ${name}`);
  };
}

let result2 = Greets("Shanee Patel");
result2();
//Activity 3:Closures in loops
//Task 5:Write a loop that creates an array of function. Each function should log its index when called. Use a closures to ensure each function logs the correct index.

let arr = [];

for (let i = 0; i < 3; i++) {
  arr.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)                                        // capature the value of i after each iteration
  );
}

arr[0]();
arr[1]();
//Activity 4: Module Pattern
//Tassk 6:Use closuers to create a simple module for managing a collection of items Implement methods to add, remove,a dn list items.

function Container(){
  let itemList =[]
  return{
    addItems: function (items){
      itemList.push(items)
    },
    removeItems: function(items){
      itemList.pop(items)
    },
    getItems: function(){
      return itemList
    }
  }
}
 const allItems = Container();
 allItems.addItems(123)
 allItems.addItems("shanee")
 allItems.addItems("asddf")
 console.log(allItems.getItems())
 allItems.removeItems()
 console.log(allItems.getItems())

//Activity 5:Memoization
//Task 7:Write a function that memoizes the results of another function Use a closures  to store the results of previous computations.

function memoize(fn) {
  const cache = {}; // Store previous computations

  return function(...args) {
      const key = JSON.stringify(args); // Use arguments as cache key
      if (cache[key] !== undefined) {
          console.log(`Returning cached result for ${key}`);
          return cache[key]; // Return cached result if available
      } else {
          console.log(`Computing result for ${key}`);
          const result = fn(...args); // Compute result
          cache[key] = result; // Cache the result
          return result;
      }
  };
}

// Example usage:
function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Outputs: Computing result for [1,2] 3
console.log(memoizedAdd(1, 2)); // Outputs: Returning cached result for [1,2] 3
console.log(memoizedAdd(2, 3)); // Outputs: Computing result for [2,3] 5
console.log(memoizedAdd(2, 3)); // Outputs: Returning cached result for [2,3] 5


//Task 8: Create a memoized version of a function that calculation the factorial of a number.

function memoizeFactorial() {
  const cache = {}; // Store previous computations

  function factorial(n) {
      if (n <= 1) return 1; // Base case
      if (cache[n] !== undefined) {
          console.log(`Returning cached result for ${n}`);
          return cache[n]; // Return cached result if available
      } else {
          console.log(`Computing result for ${n}`);
          cache[n] = n * factorial(n - 1); // Recursive computation with caching
          return cache[n];
      }
  }

  return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5)); // Outputs: Computing result for 5, 4, 3, 2, 1
console.log(memoizedFactorial(5)); // Outputs: Returning cached result for 5
console.log(memoizedFactorial(6)); // Outputs: Computing result for 6, Returning cached result for 5
console.log(memoizedFactorial(7)); // Outputs: Computing result for 7, Returning cached result for 6, Returning cached result for 5

