//Activity 1:Creating and Exporting Modules.
//Task 1: Create a modules that exports a function to add two numbers. import and use this module in another script.

const addTwoNumber = (a, b) => a + b;

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this modules in another script.

const Person = {
  name: "Goku",
  age: 25,

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  },

  haveBirthday() {
    this.age += 1;
    return `Happy Birthday ${this.name}! You are now ${this.age} years old.`;
  },
};

module.exports = { addTwoNumber, Person };


//Activity 2: Named and default Exports
//Task 3:Create a Modeules that exports multipal function using named exports. Import and use these functions in another script.

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;


//Task 4:Create a modules that exports a single function using deafult export. Import and use this function in another script.

export default function divide(a, b) {
  return a / b;
}

//Activity 3:Importing Entire Modules
//Task 5:Create a modules that exports multiple constants and functions. import the entire modules as an object in another script and use its properties.

// Task 5
export const PI = 3.14
export const COUNT = 3

export const add1 = (a, b) => a + b;
export const subtract1 = (a, b) => a - b;
export const multiply1 = (a, b) => a * b;

//Activity 4:Using third-party Modules
//Task 6:Install a third-party module using npm.Import and use a function from this modules in a script.

//Task 7: Install a third-party module using npm. Import and use this module to make a network request in a script.


//Activity 5:Module Bundling(Optional)
//Task 8: Use a module bundler like Webpack or parcel to bundler multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.