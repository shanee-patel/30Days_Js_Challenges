// Activity 1: For Loop
//Task 1: write a program to print number from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  //task 2:  write a program to print the multplication  table of 5 using for loop
  
  for (let i = 1; i <= 10; i++) {
    console.log(`5*${i}=`, 5 * i);
  }
// Activity 2: While Loop
  //task 3 write a program to calculte the sum of number from 1 to 10 using a white loop

let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(`sum of numbers from 1 to 10 is ${sum}`);

// task 4: write a program to print numbers from 10 to 1 usnig a while loop

let number = 10;
while (number >= 1) {
  console.log(number);
  number--;
}

//Activity 3: Do.. While Loop
//task 5: write a rgoram to print number from 1 to 5 using a do...white loop

let value = 1;
do {
  console.log(value);
  value++;
} while (value <= 5);

//task 6: write a program to calculate the factoirial of using a do.... whilteloop

let num1 = 18;
let j = 1;
do {
  if (num1 % j == 0) {
    console.log(j, `is factorial of ${num1}`);
  }
  j++;
} while (j <= num1);

// Activity 4: Nested Loops
//task 7 write a program to print a pattern using nested for loops

let number1 = 1;
while (number1 <= 5) {
  let number2 = 1;
  let result = "";
  while (number2 <= number1) {
    result += "*";
    number2++;
  }
  console.log(result);
  number1++;
}

//Activity 5:Loop Control Statements
//task 8 write a program to print number from 1 to 10 but skip the number 5 using the contiune statement

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }
  
  //task 9 write a program to pront number from 1 to 10 but stop the loop when the number is 7 using the break statement
  
  for (let i = 1; i <= 10; i++) {
    if (i == 7) {
      break;
    }
    console.log(i);
  }