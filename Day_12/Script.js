//Activity 1: Basic handling with try-catch 
//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
// try{
//     functionErr();
// }
// catch(e){
//     throw new Error("Bhai pahle function to delceare kar")
// }

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

// const divideTwoNumbers=(numinator, denominator)=>{
//     if(denominator === 0){
//         throw new Error ("Number is not divisible by 0")
//     }
//     return numinator/denominator;
// }
//  try{
//     const result = divideTwoNumbers(15,0)
//     console.log(result)
//  }
// catch(e){
//     console.log(e)
// }

//Activity 2: finally Block
// Task 3: Write a script that includes a try-catch and a finally block. log messages in the try, catch, and finally blocks to obersve the execuation flow.
// try{
//     console.log("hey buddy")
//     console.log("I am a coder")
// }catch(e){
//     console.log("I am in a catch")
// }
// finally{
//     console.log("right now i am in a finally")
// }

//Activity 3: custom error Objects
//Task 4: Create a custom error class that extends the built in error class. throw an instance of this custom error in a function and handle it using a try-catch block.


// try{
//     console.log("I am in the starting of try")
//     console.log(x)
//     console.log("I am in the end of try block")
// }catch(err){
//     console.log("I am in the catch block")
// }finally{
//     console.log("I am in the finnaly block")
// }

// method second

// class MyError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// const useOfCustomError = (isError) => {
//   if (isError) {
//     throw new MyError("Error using custom error class");
//   } else {
//     return "Everything fine";
//   }
// };

// try {
//   const result = useOfCustomError(true);
//   console.log(result);
// } catch (error) {
//   if (error instanceof MyError) {
//     console.error("Custom Error:", error.message);
//   } else {
//     console.error("Unexpected Error:", error.message);
//   }
// }

//Task 5: Write a function that validaties user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. handle the custom error using a try-catch block.

// const stringcheck = (inputString) => {
//     try {
//       if (!inputString || inputString.trim() === "") {
//         throw new MyError("Input string is empty");
//       }
//       console.log("Input string is correct");
//       return true;
//     } catch (error) {
//         console.log(error)
//         console.log(error.name)
//         console.log(error.message)
//      console.log(error.stack)
//     }
//   };
  
// stringcheck("shanee")
// stringcheck("")
// stringcheck("shanee  patel")

//Activity 4: Error handling in promises
//Task 6: Create a promise that randomly resolves or rejects. use ".catch()" to handle the rejection and log an appropiate message to the console.

//  let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
        
//         reject("failed")
//     },2000)
// })
// promise.then(()=>{
//     console.log("success")
// })

// promise.catch((err)=>{
//     console.log(err)
// })

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and the error message.

// const errorfunction = async ()=>{
//     try{
//         const result = await new Promise((reslove, reject)=>{
//             setTimeout(()=>{
//                 reject("promise is failed")
//             },2000)
//         });
//         console.log(result)
//     } catch(error){
//         console.log(error);
//     }
// }
// errorfunction();

//Activity 5:Graceful error Handling in Fetch
//Task 8: use the fetch API to requset data from an invalid URL and handle the error using ".catch()"log an appropriate error message to the conolse.

// const InvalidURL = "https://not-a-valid-url.com";

// // Task 8
// fetch(InvalidURL)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP Error ::: Status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log("Data:", data))
//   .catch((err) =>
//     console.error(
//       "Error while fetching data from given url, check it's correct or exists ::",
//       err.message
//     )
//   );


//Task 9: use the fetch API to request data from an invalide URL within an async function and handle the error using try-catch. Log an appropriate error message.


const reqData = async () => {
    try {
      const res = await fetch(InvalidURL);
      if (!res.ok) {
        throw new Error(`HTTP Error :: Status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(
        "Error while fetching data from given url, check it's correct or exists ::",
        error.message
      );
    }
  };
  
  reqData();













// try{
// console.log("try block starts here")
// console.log(x)
// console.log("try block ends here")
// }catch(e){
// console.log("your are inside the error")
// console.log(e)
// }finally{
//     console.log("error runs everytime")
// }
//finally block

//throw error

// try{
//     console.log(x)
// }catch(e){
//     throw new Error ("Bhai phle x ki value deleare to kar de")
// }

// let errorCode = 100;
// if(errorCode ==100 ){
//     throw new Error ("invalid json")
// }

 