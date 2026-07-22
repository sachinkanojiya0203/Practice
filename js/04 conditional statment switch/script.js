let age=26;

if(age>=18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}

// Turnary operator
let result= age>=18 ? "yes":"no";
console.log(result);

// switch case

const option=1;

switch(option){
    case 1:
        console.log("You selected option 1");
        break;
    
    case 2:
        console.log("You selected option 2");
        break;
}


// calculator using switch case

const num1=10;
const num2=5;
const operator='-';

switch(operator){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;  
    case '/':
        console.log(num1/num2);
        break;
    default:
        console.log("Invalid operator");
}   