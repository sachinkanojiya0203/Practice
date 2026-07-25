// Arrays

const student=["Sachin","Dhaval","Bhavik"] 

function print(n){
    console.log(n);
}
// foreach
student.forEach((value)=>console.log(value));

// .map
let num1=[1,2,3,4,5]

function double(num){
    return num*2
}

let arrw=num1.map(double);

console.log(arrw)

// .find 

let ans=num1.find((num1)=>num1===4);
console.log(".find method",ans)

// .findindex 

let ans1=num1.findIndex((num1)=>num1===3);
console.log(".findindex method",num1[ans1])

// .include
let inc=num1.includes(7)
console.log(inc)

// .filter
let newarr=num1.filter((numb)=>numb %2==0)
console.log(newarr)

// .slice

let scl=num1.slice(1,4)
console.log(scl)
// .splice

let sclp=num1.splice(1,2) //it will cut the value form array and make new array
console.log(sclp)
console.log(num1)