// logical oprator
// AND (&&) operator
 
let age=18;
let Gender="male";

if(age>=18 && Gender==="male"){
    console.log("You are Adult Male");
}else{
    console.log("You are not Adult Male");
}

// OR (||) operator
let age1=17;
let Gender1="male";

if(age1>=18 || Gender1==="male"){
    console.log("You are either Adult or Male");
}else{
    console.log("You are neither Adult nor Male");
}

// odd even number
let number=4;
if(number%2==0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}


// ! NOT operator
let num=5;
if(!(num%2==0)){
    console.log("The number is even");
}else{
    console.log("The number is odd");   
}