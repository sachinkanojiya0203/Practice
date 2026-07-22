//  High order Fucyion and callback function
function add(a,b,cb){
    let result=a+b;
    cb(result);
}

add(2,56,function(value){
    console.log(value);
})

add(29,500, (value)=>console.log(value)) //arrow function