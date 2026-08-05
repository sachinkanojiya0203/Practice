const colorcodecontainer=document.getElementById("color-code");
const optionscontainer=document.getElementById("option-container")
let randomcolor=null;
let score=0;
function generaterandomNumberBetween(min,max){
    return min+ Math.floor(Math.random()*(max-min+1));

};

function generaterandomColorRGB(){
    const red=generaterandomNumberBetween(0,255);
    const green=generaterandomNumberBetween(0,255);
    const blue=generaterandomNumberBetween(0,255);
    return `rgb(${red}, ${green}, ${blue})`;

}
function incrementscore(){
    score += 1;
    document.getElementById('score').innerText=score;
}
// console.log(generaterandomColorRGB());
function validateresult(el){
    // console.log(el.target)
    const selectcolor=el.target.style.backgroundColor ;
    if(selectcolor === randomcolor){
        incrementscore()
    }else{
        score=0
    }
    startgame();
};

function startgame(){
    optionscontainer.innerHTML=null;
    randomcolor=generaterandomColorRGB();
    colorcodecontainer.innerText=randomcolor;

    const ansindex=generaterandomNumberBetween(0,5);
    
    for(let i=0; i<6; i++){
        const div=document.createElement("div");
        div.addEventListener('click',validateresult);
        div.style.backgroundColor = i == ansindex? randomcolor:generaterandomColorRGB();
        optionscontainer.append(div);
    }
}

window.addEventListener('load',()=>startgame())