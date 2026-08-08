const fs = require("fs");


// fs.writeFileSync(`dummy.txt', 'Part I — Intermediate 1. Building a REST API with Express 2. The Middleware Pattern`)

// blocking request(sync)
console.log("blocking: 1")
const br=fs.readFileSync("dummy.txt","utf-8")
console.log(br)
console.log(2)

// non-blocking request (async)
console.log("non-blockig: 1")
const nbr=fs.readFile("dummy.txt",'utf-8', (err,result)=>{
    console.log(result)
})
console.log(2)