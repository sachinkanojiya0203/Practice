// 29 promisification

// without promisification

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.appendChild(script);
}
/*
loadScript('test.js', (error, script)=> {
    if (error) {
        console.log(error);
    }else {
        console.log(` file is loaded`);
    }

});
*/


// promisify

function promisifiy(fn){
    return function(...arg){
        return new Promise((resolve,reject)=>{
            fn(...arg,(error,result)=>{
                if(error) return reject(error);
                return resolve(result);
            })
        });
    }
}
const loadscript1=promisifiy(loadScript);
/*
loadscript1('test.js').then(()=>console.log("Done")).catch(err=>console.log("error not loading file!"))
*/  
// using IIFE async

(async ()=>{
    try{
        const result=await loadscript1('test.js')
        // console.log(result)
        console.log('done')
    }catch{
        console.log("error not loading file!")
    }
})() 