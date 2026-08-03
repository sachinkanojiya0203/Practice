// Generator Function

/*
1.Itrator
2.Generator 
3.yeild
*/

// iterator
function makeitrator(start=0, end=10, step=1){
    let nextstart = start;
    let iterationCount = 0;

    return {
        next(){
            let result;
            if(nextstart <= end){
                result = {value: nextstart, done: false};
                nextstart=nextstart + step;
                iterationCount++;
                return result;  
            }
            return {value: iterationCount, done: true};
        }
    }
}

const itrator = makeitrator(0, 10, 1);
let result=itrator.next();

while(!result.done){
    console.log("iterator:", result.value);
    result=itrator.next();
}


// gwenerator function (using function* keyword)

function* generator(start,end,step=1){
    for(let i=start; i<=end; i+=step){
        yield i;
    }
}

const gen = generator(1, 10,1);
for(let value of gen){
    console.log("generator:", value);
}

// html button click event to get next value from generator

const btn = document.getElementById("next-btn");
const gen1= generator(1,20,2);

btn.addEventListener("click", () => {
    btn.innerText=gen1.next().value;
});