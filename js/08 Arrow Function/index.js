// Arrow function

// 1) syntax 
const hey=()=>{
    console.log("hello!")
}
hey()

const add=(a,b)=>{
    return a+b;
}
console.log(add(2,3))

const add1=(a,b)=>a+b;  //One liner
console.log(add1(30,5))

// 2) Argument 'Keyword' (Argument is not working in Arrow function use spred oprator(...add))

const addm=(...num)=>{
    console.log(num)
}
console.log(addm(1,2,5,4,6))

// 3) Hoisting(not working in arrow function )

// const hey=()=>{
//     console.log("hello")
// }

// hey()

// 3) This keyword (it works on norma functions)

const obj={
    value:20,
    myfunction: function(){
        console.log(this.value);
    }
}

obj.myfunction()