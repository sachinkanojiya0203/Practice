// composition

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
function square(val){
    return val*val
}

function compostwofunction(fn1,fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    }
}



const task=compostwofunction(multiply,square);

console.log(task(3,6))

//convert into morden js ES6

const compo=(fn1,fn2)=>(a,b)=>fn2(fn1(a,b))
const step1=compo(multiply,square);

console.log(step1(5,6))



// multiple vale value function will use 
function multiplying(arg){
    return arg[0]*arg[1];
}


function compos1(...fns){
    return function(...values){
        return fns.reduce((a,b)=>b(a),values)
    };
}
const tas=compos1(multiplying,square)

console.log(tas(10,2))

// convert mordern js
const step2=(...fns)=>(...value)=>fns.reduce((a,b)=>b(a),value)
const result=step2(multiplying,square)
console.log("in this the use morden JS: ",result(10,5))