// activity 1: Object Creation and access
// Task 1: create an object representing a book with properties like title, author and year and log the object to the console.

//method 1
const book ={
    title: "What i want",
    author: "Shanee",
    year: 2024
}
console.log(book)

//method 2

// const book1 ={}
const book1 = new Object()
//adding properties
book1.title = "what i want"
book1.author = "shanee"
book1.year = 2024

console.log(book1)

//Task 2: Access and log the title and author properties of the book object

console.log(book.title);
console.log(book.author);


const {title,author, year } = book;
console.log(title)
console.log(author);
console.log(year);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the books title and author , and log the result of calling this method.
const book2 ={
    title: "What i want",
    author: "Shanee",
    year: 2024,

    getInfo: function(){
        return `${this.title} and author name is ${this.author}`
    }
    
}

console.log(book2.getInfo(), typeof book2.getInfo())



//task 4: add amethod to the book Object that tskes a parameter(year) and updates the book year property, then log the updated object.


const book3 ={
    title: "What i want",
    author: "Shanee",
    year: 2024,

    getInfo: function(){
        return `${this.title} and author name is ${this.author}`
    },

    updatedYear: function(year){
        this.year = year
    }
}

book3.updatedYear(2026)

console.log(book3)



// // Copies properties from a source object to a target object
// Object.assign(target, source)

// // Creates an object from an existing object
// Object.create(object)

// // Returns an array of the key/value pairs of an object
// Object.entries(object)

// // Creates an object from a list of keys/values
// Object.fromEntries()

// // Returns an array of the keys of an object
// Object.keys(object)

// // Returns an array of the property values of an object
// Object.values(object)

// // Groups object elements according to a function
// Object.groupBy(object, callback)


//Activity 3: Nested Objects
// task 5 create a nested object respresenting a library with properties like name and books ( an array of book object) and log the library object to the console

const library = {
    name: "Public Library",
    book: [
        {
            title: "who I am",
            author: "shanee",
            year: 2024
        },
        {
            title: "Medhavi",
            author: "sunny",
            year: 2029
        },
        {
            title: "Mayajaal",
            author: "Prince",
            year: 2032
        },
        {
            title: "jeevan Ka rashya",
            author: "shane",
            year: 2034
        }
    ],

    printBooks: function () {
        console.log(`Books in Public library: ${this.name}`);
        this.book.forEach((books) => {
          console.log(`${books.title} is written by ${books.author} in year ${books.year}`);
        });
      },
}

// console.log(library)

library.printBooks()

//  task 6: access tand log the name of library and the title of all the books in the libaray
console.log("Name of library is", library.name);
library.book.forEach((books) => {
  console.log(`title of book is`, books.title);
});


// Activity 4: The this keyword
//task 7:add a method to the book object that use the "this keyword" to return a string with the book title and year and log the result of calling this method

  const book4 ={
    title: "What i want",
    author: "Shanee",
    year: 2024,

    getInfo: function(){
        return `${this.title} and author name is ${this.author}`
    }
    
}

console.log(book4.getInfo(), typeof book4.getInfo())


// Activity 5: Object Iteration
//task 8: use a "for...in loop" to iterate over the properties of the book object and log each property and its value

for(const key in book){
    console.log(book[key])
}
  
//task 9: use "object.key" and "object.value" method to log all the key value of the book object

const keys =Object.keys(book1)
console.log("keys are ", keys)
const vzlues = Object.values(book1)
console.log("vlaues are ",vzlues)
