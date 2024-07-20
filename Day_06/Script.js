// Activity 1: Array Creation and access
// task 1: create an array of number from 1 to 5 and log the array to the console

const arr = [1,2,3,4,5];
console.log(arr);
const arr1 = new Array (5,4,3,2,1);
console.log(arr1)

//task 2: access the first and last elements of the array and log them to the console.

console.log(`first element is ${arr[0]}`)
console.log(`last element is ${arr[arr.length-1]}`)

//Activity 2: Array Methods(basic)
// task 3: use the push method to add a new number to the end of the array and log the update array

arr.push(6);
console.log(arr);

//task 4: use the pop method to remove the last element from the array and log the update array.

arr.pop()
console.log(arr);

//task 5: use the shift method to remove the first element from the array and log the updated array.

arr.shift()
console.log(arr);

// task 6: use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1)
console.log(arr);

//Activity 3: Array methods(intermediate)
// task 7: use the map method to craete a new arary where each number is doubled and log the new array
const arr2 = [1,3,5,7,9];
function myfun (number){
    return number*2;
}

const arr3 = arr2.map(myfun);
console.log(arr3);

const newArr = [];
arr.map((num) => {
  newArr.push(num * 2);
});
console.log(newArr);




// task 8: use the filter method to craete a new array with only even numbers and log the new aray

const arr4 = [1,3,5,7,9];
function myfun1 (number){
    return number%2 ===0;
}

console.log(arr.filter(myfun1))



//Task 9: use the reduce method to calcuate the sum of all numbers in the array and log the result

const arr5 = arr.reduce((accumelator, current) => {
    accumelator += current;
    return accumelator;
  });
  
  console.log(arr5);

// Activity 4: Array Iteration
// Task 10 : use the for loop to iterate over the array and log each element to the console

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  
  //Task 11: use the forEach method to iterate over the arary and log each element to the console

  arr.forEach((element) => {
    console.log(element);
  });

  
// Activity 5: Multi- dimensional Arrays
// Task 12: create a two dimensional array (matrix) and log the entire array to the console

let twoArr = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  ComArr = [];
  for (let i = 0; i < twoArr.length; i++) {
    for (let j = 0; j < twoArr[i].length; j++) {
      combArr.push(twoArr[i][j]);
    }
  }

  console.log(combArr);


  let arr6 =[1,2,3,4]
  let arr7 =[5,9,6,7]
  let arr8 =[6,7,3,4]
  let arr9 =[4,3,2,5]
  let arr0 =[2,0,1,9]

  let multiArr =[arr6, arr7, arr8, arr9, arr0]
  console.log(multiArr)

  const largArr=[];

  for( let i=0; i <arr6.length; i++){
    for(let j=0; j <arr7.length; j++){
        for(let k=0; j <arr8.length; k++){
            for(let l=0; j <arr9.length; l++){
                for(let m=0; j <arr0.length; m++){
                    largArr.push(multiArr[i][j][k][l][m])
                }
            }
        }
    }
  }
  console.log(largArr)
  //Task 13: access and log a specific element from the two dimensional array
  
  console.log(twoArr[1][0]);