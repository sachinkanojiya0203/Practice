// functions 

function sayhello(){
    console.log("Hello")
}

sayhello()

// parameter

function add(a,b){
    console.log(a+b);
}
add(3,3)

// add multipl value usin spred oprator
function addall(...number){
    return number.reduce((sum,current)=>sum+current,0);
}

let num=addall(1,2,3,4,5,5,6,66)
console.log(num)

//Argument use for the add multiple vlaue

function addnumber(){
    let ans=0;
    for(let i=0;i<arguments.length;i=i+1){
        ans=ans+arguments[i]
    }
    return ans
}
let result=addnumber(12,22,15,458,54)
console.log(result)

// multiply

function multi(a,b){
    console.log(a*b);
}

multi(2,5)
// return
function sub(a,b){
    return a-b
}

let a=sub(6,4);
console.log("the answer was sub:",a)