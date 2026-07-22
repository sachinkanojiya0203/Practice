// Array

const student=["Sachin","Dhaval","Bhavik"]

console.log(student.length)  // check the lenght of the array
console.log(student[0])
console.log(student)


student[0]="sunny"  // mutation
console.log(student[0])
console.log(student)

// Push method

student.push("rani")
console.log(student)

// pop method
student.pop("Bhavik")
console.log(student)

// Homogeneous(data will math and arange with data type) vs. Heterogeneous(data will not arange) Mixtures of data type

const table=["bottle",234,true,diary={name:"sachin",rollnumeber:23}]
console.log(table)
