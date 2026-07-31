// this called currying(if parameter will not complete the output will not give)

// make a multiple closure
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(2)(5)(3));

const add1=(a)=>(b)=>(c)=>a+b+c //convert in ES6
console.log(add1(4)(8)(5))


// send Auto email
function autoemail(to){
    return function(subject){
        return function(body){
            console.log(`send Email to ${to} with subject: ${subject}: ${body}`)
        }
    }
}

let dev1=autoemail('sachinknojiya@gmail.com');
let dev2=dev1("job regigination");
dev2("hey sachin somthing for you")

const sendmail=(to)=>(subject)=>(body)=>console.log(`send Email to ${to} with subject: ${subject}: ${body}`)
let step1=sendmail("asasafacas@gmail.com")
let step2=step1("stock update")
step2("hey there is some missing part")