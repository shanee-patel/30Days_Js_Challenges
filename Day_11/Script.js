//Activity 1: Understanding promises
//Task 1:Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

let promise1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Task 1 completed")
        resolve("sucess")
    },2000)
})

//task 2: Create a promise that reject with an error message after a 2-second timeout and handle the error using .catch().

let promise2 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Task 2 completed")
        reject("error")
    },2000)
})

promise2.catch((err)=>{
    console.log(err)
})

//Activity 2: chaining Promises
//task 3: Create a Sequence of promises that simulate fetching data from a server. chain the promises to the log message in a Specific order.

function getdata (data){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",data)
            resolve("sucess")
        },2000)
    })
}

getdata(1).then(()=>{
    return getdata(2)
}).then(()=>{
    return getdata(3)
}).then(()=>{
    console.log("fetched sucessfully")
})

//Activity 3: Using Async/Await
//Task 4: Write an async function that waits for a promise to reslove and then logs the resolved value.
function getdata (data){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",data)
            resolve("sucess")
        },2000)
    })
}

// IIFO
// (async function (){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
// })();

async function getDataAll(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
}


//Task 5:Write an async function that handles a rejected promise using try-catche and logs the error message.

function getdata (data){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",data)
            reject("error")
        },2000)
    })
}

getdata(1).catch((err)=>{
    return getdata(2);
}).catch((err)=>{
    console.log(err)
})

//second method by using arror function

// const waitForPromiseReject = async () => {
//     try {
//       const result = await new Promise((resolve, reject) => {
//         setTimeout(() => reject("Promise failed"), 1400);
//       });
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   waitForPromiseReject();


//Activity 4: Fetching Data from an API
//Task 6:use the fetch API to get data from a public API and log the responce data to the console using promises.

fetch("https://api.github.com/users")
  .then((response) => {
    return response.json();
  })
  .then((parsedData) => console.log(parsedData))
  .catch((err) => console.error(err));

//Task 7: use the fetch API to get data from a public ApI and log the responce data to the console using async /await.

const fetchDataApi = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchDataApi();


//Activity 5: Concurrent Promises
//Task 8: Use promise".all" to wait for multiple promises to resolve and then log all their values.

  const promise3 = new Promise((resolve,reject) =>
    setTimeout(() => {
        resolve("promise 3")
    },2000)
  );
  const promise4 = new Promise((resolve,reject) =>
    setTimeout(() => resolve("Promise 4"), 1000)
  );
  const promise5 = new Promise((resolve,reject) =>
    setTimeout(() => resolve("Promise 5"), 2200)
  );
  const promise6 = new Promise((resolve,reject) =>
    setTimeout(() => resolve("Promise 6"), 1500)
  );
  
  Promise.all([promise3, promise4, promise5, promise6])
    .then((resolved) => {
      console.log(resolved);
    })
    .catch((err) => console.error(err));

//Task 9: use promise".race "to log the value of the first promises that resolve among multiple promises.

  Promise.race([promise3, promise4, promise5, promise6]).then((result) =>
    console.log(result)
  );


// function getdata (data,getnextdata){
//     setTimeout(()=>{
// console.log("data",data)
// if(getnextdata){
//     getnextdata()
// }
//     },2000)
// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3)
//     })
// });

// const getPromise =()=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("shanee Patel")
//         resolve("sucess")
//         // reject("error ocuccerd")
//     })
// }

// let promise = getPromise()
// promise.then((res)=>{
//     console.log("Promise sucessfully", res)
// })

// promise.catch((err)=>{
//     console.log("Promise Not sucessfully", err)
// })

//promise chaining

// function getData (data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// console.log("data",data)
// resolve("sucess")
//         },1000)
//     })
// }

// getData(1).then(()=>{
//     console.log("sucessfully")
// getData(2).then(()=>{
//     getData(3).then(()=>{

//     })
// })
// })

// getData(1).then(()=>{
//     return getData(2)
// }).then(()=>{
//     return getData(3)
// }).then(()=>{
//     return getData(4)
// }).then(()=>{
//     return getData(5)
// }).then(()=>{
//     return getData(6)
// }).then(()=>{
//     return getData(7)
// }).then(()=>{
//     console.log("seuceessfully")
// })



//Async / Await

// function getData (data){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", data)
//             resolve("sucess")
//         },2000)
//     })
// }

// async function getDataAll(){
//     await getData(1)
//     await getData(2)
//     await getData(3)
// }

// IIFE Imediately function envoked 
// (async function (){
//     await getData(1)
//     await getData(2)
//     await getData(3)
// })();