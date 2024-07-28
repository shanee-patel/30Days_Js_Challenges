//Activity 1:Basic Recursion
//Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial (n){
  if(n < 0) return`invalid number`
  if(n === 0) return n;
    if(n === 1) return n;
      return n* factorial(n-1)
}
console.log(factorial(-1));
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

//Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test Cases.

function Fibonacci(n) {
  if(n < 0) return`invalid number`
  if (n === 0) return n;
  if (n === 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(-1))
console.log(Fibonacci(0))
console.log(Fibonacci(1))
console.log(Fibonacci(5))
console.log(Fibonacci(10))

//Activity 2: Recursion with Arrays
//Task 3: Write a recursive function to find the sum of all elements in an array. log the result for a few test cases.

function sumAllArray(array) {
  if (!array.length) return 0;
  return array[0] + sumAllArray(array.slice(1));
} 
console.log("Sum of all array elements is:", sumAllArray(number));

//Task 4: Write a recursive to find the maximum element in an array. Log the result for a few test cases.

function maxNumArray(array) {
  if (array.length - 1 === 0) return array[0];
  const maxArray = maxNumArray(array.slice(1))
  return array[0]> maxArray ? array[0]:maxArray
}
console.log(maxNumArray([1,2,4,5,3]));

//Activity 3:String Manipulation with Recursion
//Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str){
  if(!str.length) return "";
  return reverseString(str.substr(1)) + str.charAt(0)
}

console.log(reverseString("Shanee"))

//Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPalindrome(str) {
  if (str.length <= 1) return true;
  if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
  return checkPalindrome(str.substr(1, str.length - 2));
}
console.log(checkPalindrome("Shanee")); 
console.log(checkPalindrome("jahaj")); 
console.log(checkPalindrome("a")); 

//Activity 4:Recursive Search
//Task 7: Write a recursive function to perform a binary search on a sorted array. log the index of the target element for a few test Cases.

function binarySearch(arr, low = 0, high = arr.length - 1,target ) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, mid - 1,target, low);
  return binarySearch(arr, mid + 1, target, high);
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], -2));

//Task 8:Wrtie a recursive function to count the occurrences of a target element in an array.Log the rsult for a few test cases.


function countTarget(arr, target, index = 0) {
  if (index >= arr.length) return 0;
  return (arr[index] === target ? 1 : 0) + countTarget(arr, target, index + 1);
}
console.log(countTarget([1, 2, 3, 3, 1], 3));
console.log(countTarget([1, 2, 3, 4, 4,4,5], 4)); 
console.log(countTarget([0, 1, 2, 3, 4], 5)); 

//Activity 5:Tree Traversal(Optional)
//Task 9:Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}
function inOrderTraversal(node, result = []) {
  if (node === null) return result;
  inOrderTraversal(node.left, result);
  result.push(node.value);
  inOrderTraversal(node.right, result);
  return result;
}
let rootOne = new TreeNode(4);
rootOne.left = new TreeNode(2);
rootOne.right = new TreeNode(5);
rootOne.left.left = new TreeNode(1);
rootOne.left.right = new TreeNode(3);

console.log(inOrderTraversal(rootOne));

//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.


function treeDepth(node) {
  if (node === null) return 0;
  return Math.max(treeDepth(node.left), treeDepth(node.right)) + 1;
}
let rootTwo = new TreeNode(4);
rootTwo.left = new TreeNode(2);
rootTwo.right = new TreeNode(5);
rootTwo.left.left = new TreeNode(1);
rootTwo.left.right = new TreeNode(3);

console.log(treeDepth(rootTwo));