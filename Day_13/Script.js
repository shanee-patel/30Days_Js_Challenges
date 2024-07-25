//Activity 1:Creating and Exporting Modules.
//Task 1: Create a modules that exports a function to add two numbers. import and use this module in another script.

const {addTwoNumber} = require ("./script_module.js")
const sum = addTwoNumber(23,45)
console.log("Sum:", sum);

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this modules in another script.

const {Person} = require("./script_module.js")

console.log(Person);
console.log(Person.introduce());
console.log(Person.haveBirthday());

//Activity 2: Named and default Exports
//Task 3:Create a Modeules that exports multipal function using named exports. Import and use these functions in another script.


import { add, subtract, multiply } from "./script_module.js";
console.log("Added value:", add(10, 4));
console.log("Subtracted value:", subtract(10, 4));
console.log("Multiplied value:", multiply(10, 4));


//Task 4:Create a modules that exports a single function using deafult export. Import and use this function in another script.

import divide from "./script_module.js"
console.log("Divided value:", divide(10, 4));

//Activity 3:Importing Entire Modules
//Task 5:Create a modules that exports multiple constants and functions. import the entire modules as an object in another script and use its properties.

import * as entire from "./script_module.js";

console.log("PI:", entire.PI);
console.log("COUNT:", entire.COUNT);

console.log("Added Value:", entire.add1(30, 4));
console.log("Subtracted Value:", entire.subtract1(30, 4));
console.log("Multiplied Value:", entire.multiply1(30, 4));

//Activity 4:Using third-party Modules
//Task 6:Install a third-party module using npm.Import and use a function from this modules in a script.

import _ from "lodash";
const arr = [31, 21, 23, 43, 34, 4];
console.log("Arrays:", arr);
console.log("Arrays last value:", _.last(arr));
console.log("Arrays first value:", _.head(arr));
console.log("Reveres of array:", _.reverse(arr));

console.log("Max in array:", _.max(arr));
console.log("Min in array:", _.min(arr));
console.log("Sum of all elements in array:", _.sum(arr));

//Task 7: Install a third-party module using npm. Import and use this module to make a network request in a script.

import axios from "axios";
const fetchGitHubUsers = async () => {
  const response = await axios.get("https://api.github.com/users");
  const users = response.data
  console.log(users);
};

fetchGitHubUsers()

//Activity 5:Module Bundling(Optional)
//Task 8: Use a module bundler like Webpack or parcel to bundler multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.