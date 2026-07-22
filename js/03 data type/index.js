// Data Types in JavaScript

// 1. number
let age = 25;
console.log(typeof age); // Output: number 
console.log(age); // Output: 25

// 2. string
let name = "sachin";
let name2= "kanojiya"
console.log(typeof name); // Output: string
console.log(name); // Output: John Doe
console.log(name + " " + name2); // Output: John Doe Jane Smith

// 3. boolean
let isStudent = true;
console.log(typeof isStudent); // Output: boolean
console.log(isStudent); // Output: true
// null
let emptyValue = null;
console.log(typeof emptyValue); // Output: object
console.log(emptyValue); // Output: null

// 4. undefined
let notDefined;
console.log(typeof notDefined); // Output: undefined
console.log(notDefined); // Output: undefined

// 5. object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  islogedIn: true,
};
console.log(typeof person); // Output: object
console.log(person); // Output: { firstName: "John", lastName: "Doe", age: 25 , islogedIn: true }
console.log(person.firstName,age); // Output: John