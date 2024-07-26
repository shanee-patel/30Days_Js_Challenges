// Activity 1:Class Definition
// Task 1:Defin a class Person with Properties Nmae and age and a method to return a greeting message. Create an inteance of the class and log the greeting message 

class person{
  constructor(name,age){
    this.name= name;
    this.age = age;
  }
  greeting(){
    return` hello everyone ,my Name is ${this.name} and my age is${this.age}`
  }
}

const person1 = new person("Shanee",21)
console.log(person1)



//task 2: add a method to the person class that update the age property and log the updated age.

class newPerson{
  constructor(name,age){
    this.name= name;
    this.age = age;
  }
  greeting(){
    return` hello everyone ,my Name is ${this.name} and my age is${this.age}`
  }
  updatedAge(newAge){
    this.age=newAge;
    return`My updated age is${this.age}`
  }
}

const person2 = new newPerson("Shanee",22)
console.log(person2)
console.log(person2.updatedAge(24));


//Activity 2: Class Inheritance
//Task 3:Defin a class student that extends the person class. Add a property student and a method to return the student ID. Create an Instance of the Student class and log the student ID.
 //person taking from task 2
class Student extends newPerson{
  constructor(name,age,studentId){
    super(name,age)
    this.studentId = studentId
  }

  StudentInfo(){
    return`${this.name}'s age is ${this.age} and student id is${this.studentId}`
  }

}

const info1 = new Student ("shanee",21,"sunny@123")
console.log(info1)
console.log(info1.StudentInfo())


//Task 4: Override the greeting method in the student class to include the student ID in the message. Log the Overridden greeting message.

class Student1 extends person{
  constructor(name,age,studentId){
    super(name,age)
    this.studentId = studentId
  }

  StudentInfo(){
    return`${this.name}'s age is ${this.age} and student id is${this.studentId}`
  }
  greeting(){
    return`  ${this.name} is a pro coder and his age is${this.age}`
  }

}
const info2 = new Student1("shanee",22,"sunny@1233")
console.log(info2)
console.log(info2.greeting())



//Activity 3: Static Methods and Properties 
//Task 5: Add a static Method to the person class that return a generic greeting message. ca;; this static method without creating an instance of the class and log the message.

class Student2 extends person{
  constructor(name,age,studentId){
    super(name,age)
    this.studentId = studentId
  }

  StudentInfo(){
    return`${this.name}'s age is ${this.age} and student id is${this.studentId}`
  }
  greeting(){
    return`  ${this.name} is a pro coder and his age is${this.age}`
  }
  static information(){
    return `hello`
  }

}
const info3 = new Student1("shanee",22,"sunny@1233")
console.log(info3)
console.log(info3.information)
//Task 6: Add a static property to the student class to keep track of the number of students created Increment this property in the constructor and log the total number of students.

class Student3 extends person{
  static studentcount =0
  constructor(name,age,studentId){
    super(name,age)
    this.studentId = studentId
    Student3.studentcount++
  }

  StudentInfo(){
    return`${this.name}'s age is ${this.age} and student id is${this.studentId}`
  }
  greeting(){
    return`  ${this.name} is a pro coder and his age is${this.age}`
  }
  static information(){
    return `hello`
  }

}
const boy1 = new Student3("shanee",21,"sunny@123")
const boy2 = new Student3("ayush",23,"ayush@123")
const boy3 = new Student3("shikhar",22,"shikhar@123")
const boy4 = new Student3("shiva",24,"shiva@123")
const boy5 = new Student3("shiv",23,"shiv@123")
console.log(Student3.studentcount)

//Activity 4: Getters and Setters
//Task 7: Add a getter method to the person class to return the full name (assume a firstName and lastName proprty). create an instance and log the full anme using the getter.

//Task 8: Add a setter method to the person class to update the name properties (firstName and lastName). update the name using the setter and log the updated full name.
class person3{
  constructor(name,last){
    this.name= name;
    this.last = last;
  }
  get name(){
    return this._name.toUpperCase()
  }
  get last(){
     return this._last.toUpperCase()
  }

  set name(first){
    this._name= first
  }
  set last(last){
    this._last= last
  }
}

const person4 = new person3("Shanee","Patel")
console.log(`${person4.name} ${person4.last}`)
//Activity 5: private Fields(Optional)
//Task 9: Defin a class Account with private fields for balance and a method to deposite and withdraw money. ensure that the balance can only be updated through these methods.


//Task 10: Create an instance of the Account class and test the deposite and withdraw methods, logging the balance after each operation.


class acount{
  constructor(balance=0){
    this.balance= balance
  }
  
  depositMoney(money){
    if(!(money >= 0)){
      console.log("Please deposit valid amount")
    }
    this.balance= this.balance +money
    return ` deposited amount is ${money}`
  }
  withdrawMoney(money){
    if(!(money >= 0 && money >= this.balance)){
      console.log("Please deposit valid amount")
    }
    this.balance= this.balance - money
    return ` withdraw amount is ${money}`
  }
  
  get totalMoney(){
    return this.balance
  }
  }
  let personAccount = new acount(1000);
  console.log("Account Balance is ", personAccount.totalMoney);
  console.log(personAccount.depositMoney(1000));
  console.log("Account Balance is ", personAccount.totalMoney);
  console.log(personAccount.withdrawMoney(2000));
  console.log("Account Balance is ", personAccount.totalMoney);