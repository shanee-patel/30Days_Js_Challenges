//Activity 1: Sorting Algorithms
//Task 1:Implement the bubble sort algorithms to sort an array of numbers in asending order. Log the sorted array.

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap arr[j] and arr[j + 1]
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
      }
  }
  return arr;
}

let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(array1));

//Task 2:Implement the selection sort algorithms to sort an array of numbers in asecnding order. Log the sorted array.

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIdx]) {
              minIdx = j;
          }
      }
      // Swap arr[i] and arr[minIdx]
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

let array2 = [64, 25, 12, 22, 11];
console.log("Selection Sort:", selectionSort(array2));

//Task 3:Implement the quicksort algorithms to sort an array of numbers in ascending order. Log the sorted array

function quicksort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
      if (i !== Math.floor(arr.length / 2)) {
          if (arr[i] < pivot) {
              left.push(arr[i]);
          } else {
              right.push(arr[i]);
          }
      }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

let array3 = [10, 7, 8, 9, 1, 5];
console.log("Quicksort:", quicksort(array3));

//Activity 2: Searching Algorithms
//Task 4: Implement the linear search algorithms to find a target value in an array. Log the index of the target Value

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i;
      }
  }
  return -1;
}

let array4 = [2, 3, 4, 10, 40];
console.log("Linear Search:", linearSearch(array4, 10)); 

//Task 5: Implement the binary search algorithm to find a target value in asorted array. Log the index of the target value.

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
}

let array5 = [2, 3, 4, 10, 40];
console.log("Binary Search:", binarySearch(array5, 10));  

//Activity 3:String Algorithms
//Task 6:Write a function to count the occurence of each character in a string .Log the charcter counts.

function countCharacters(str) {
  let charCount = {};
  for (let char of str) {
      charCount[char] = charCount[char] + 1 || 1;
  }
  return charCount;
}

let string1 = "character";
console.log("Character Count:", countCharacters(string1));

//Task 7:Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstring(s) {
  let map = new Map();
  let left = 0, right = 0;
  let maxLength = 0;
  
  while (right < s.length) {
      if (map.has(s[right])) {
          left = Math.max(map.get(s[right]) + 1, left);
      }
      map.set(s[right], right);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
  }
  
  return maxLength;
}

let string2 = "abcabcbb";
console.log("Longest Substring Length:", longestSubstring(string2)); 

//Activity 4: Array Algorithms
//Task 8:Wrtie a function to rotate an array by 'k' postions. Log the rotated array.

function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

let array6 = [1, 2, 3, 4, 5, 6, 7];
console.log("Rotated Array:", rotateArray(array6, 3)); 

//Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
      } else {
          merged.push(arr2[j]);
          j++;
      }
  }
  
  while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
  }
  
  while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
  }
  
  return merged;
}

let array7 = [1, 3, 5];
let array8 = [2, 4, 6];
console.log("Merged Array:", mergeSortedArrays(array7, array8));  

// Activity 5: Dynamic Programming (Optional)
//Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n + 1);
}

console.log("Fibonacci Sequence:", fibonacci(10)); 

//Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

function knapsack(values, weights, capacity) {
  let n = values.length;
  let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
          if (weights[i - 1] <= w) {
              dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
          } else {
              dp[i][w] = dp[i - 1][w];
          }
      }
  }

  return dp[n][capacity];
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;
console.log("Knapsack Maximum Value:", knapsack(values, weights, capacity));