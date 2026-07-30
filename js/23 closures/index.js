/*
function init(name){
    // let name="sachin";
    function displayn(){
        console.log(name);
    }
   return displayn;  // this is a closure , the closure is boundle for a combination of function 
}

// let cnlp=prompt("Enter name",init)
let cnlp=init("sachin")

cnlp()
*/

// add use in closure

function adder(num){
    function add(b){
        console.log(num+b);
    }
    return add;
}

let result10=adder(10)
result10(5)

let result20=adder(20)
result20(5)

// make text sizer

const mname=document.getElementById('my-name');
const mbtn=document.getElementById('my-btn')
function maketext(size){

    function changesize(){
        mname.style.fontSize=`${size}px`;
    }
    return changesize;
}

let change10=maketext(10)
let change20=maketext(20)
let change30=maketext(30)
let change40=maketext(40)

mbtn.addEventListener('click',change10)

//  count

function count(){
    let counts=1;
    function counter(){
        console.log(counts++)
    }
    return counter;
}

const counter1=count();
counter1()
counter1()
counter1()
counter1()
counter1()
