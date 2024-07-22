//ES6+Feature
//Activity 1: Template Literals
//task 1: use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name= "Shanee"
const age = 21

console.log(`Name of the person is ${name} and age is ${age}`)

// task 2: Create a multi-line string using template literals and log it to the console

const teacher ="Hitesh sir"
const info = `hey my name is ${name} and my age is 
${age}
iam solving the question of javascript
 
which is given by ${teacher}`
 console.log(info)


 //Activity 2: Destructing
 // Task 3: use array destructuring to extract the first and second element from an array of number and log them to the console

 const element = [1,2,3,4,5,6,7];
 const [first,second,third, ...rest] =element

 console.log(first)
 console.log(second);
 console.log(third);
 console.log(rest)

// Task 4: use object destructuring to extract the tittle and author from a book object and log them to the console

const book ={
    title: "What i want",
    author: "Shanee",
    year: 2024
}
const {title,author} =book;

console.log(title)
console.log(author);


//Activity 3: Spread and rest Operators
// Task 5: use the spread operator to create a new array that include all element of an existing array plus additional element and log the new array to the console

const newArray =[...element, 8,9,10]
console.log(newArray);

// Task 6: use the rest operator in a function to accept an arbitrary of argument sum them and return the result

function sum(...number) {
  return number.reduce((total, num) => total + num);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); 


//Activity 4: Default Parameters
// Task 7: write a function that take two parameter and return their prodcut with the second parameter having a default value of 1 log the result of calling this function with and without the second parameter

function prodcut (a,b=1){
    return a*b;
}

console.log(prodcut(5,2));
console.log(prodcut(5));


//Activity 5: Enhanced OBJECT lITERALS
// Task 8: use enhanced object literal to crate an object with method and properties and log the object to the console

//take values from task 1
// const name= "Shanee"
// const age = 21

const personalInfo ={
    name,age,
    msg(){
        return `hey my name is ${name} and my age is ${this.age}`
    }
}
console.log(personalInfo)
console.log(personalInfo.msg());

// Task 9: create an object with computed property names based on varible and log the object to the console

const key ="first name"
const key1 = "last name"

const person= {
    [key]: "Shanee",
    [key1]: "Patel"
}
console.log(person);

