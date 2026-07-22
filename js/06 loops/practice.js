//LOOPS

// tables
/*
let which = parseInt(prompt("enter the number to print table"));

for(let i=1; i<=10; i++){
    let table=which*i;
    // console.log(`${which}*${i}= ${table}`)
}
*/

// pattern question
// 1. Print the following pattern using loops:
// *
// **
// ***
// ****
// *****
let row=5;
let pattern1="";

for (let i=1; i<=row; i++){
    for(let num=1; num<=i; num++){
        pattern1+="*"
    }
    pattern1+="\n";
}console.log(pattern1)

// 2. Print the following pattern using loops:
// *****
// ****
// ***
// **
// *

// 3. Print the following pattern using loops:
// 1
// 22
// 333
// 4444
// 55555

// 4. Print the following pattern using loops:
// 1
// 12
// 123
// 1234
// 12345

let pattern2=""
for(let i=1;i<=row;i++){
    for(let num=1; num<=i;num++){
        pattern2+=num;
    }
    pattern2+="\n"
}
console.log(pattern2)
// 5. Print the following pattern using loops:
//     *
//    **
//   ***
//  ****
// *****
