// veriables is global scoped

var age=30;
var number=10;
var number2=20;
console.log(`total sum:${number+number2} age:${age}`);

// let is locally scoped

let name="John";
console.log(`My name is ${name}`);

if(true){
    let name1="Doe";
    console.log(`My name is ${name1}`);
}

// console.log(`My name is ${name1}`);

// const is always locally scoped value will be fixed

const num=10;
console.log(`The number is ${num+25}`);