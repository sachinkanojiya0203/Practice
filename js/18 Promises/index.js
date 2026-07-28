/* Promise (.then,.catch)
1. syncronus (give a output imidate)
2. asyncronus (give promise to take task then give output(Await))
3. .then (if promise will resolve the run .then)
4. .catch(if promise will not resolve then. run .catch)
5. fetch(to get date from another location like(api, local storage,etc.))

*/

let a=1;
let b=3;

// console.log(a+b)
const result=a+b
/*
async function getdata() {
    const japi=await fetch('https://jsonplaceholder.typicode.com/posts')
    
    console.log(await japi.json())
}

getdata();
*/

fetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})

console.log(result);
// console.log(result)