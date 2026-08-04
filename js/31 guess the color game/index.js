const colorcodecontainer=document.getElementById("color-code");
const optionscontainer=document.getElementById("option-container")
const scorecontainer=document.getElementById("score")
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
    score++;
    scorecontainer.innerText=score;
     localStorage.setItem("score", score);
}
// console.log(generaterandomColorRGB());
function validateresult(el){
    // console.log(el.target)
    
    const selectcolor=el.target.style.backgroundColor ;
    if(selectcolor === randomcolor){
        incrementscore();
    }else{
        score=0;
        scorecontainer.innerText=score;
        localStorage.setItem("score",score)
    }
    startgame();
     
};

function startgame(){
    /*
    score=Number(window.localStorage.getItem('score'))||0;
    scorecontainer.innerText=score*/

    optionscontainer.innerHTML="";
    randomcolor=generaterandomColorRGB();
    colorcodecontainer.innerText=randomcolor;

    const ansindex=generaterandomNumberBetween(0, 5);
    
    for(let i=0; i<6; i++){
        const div=document.createElement("div");
        div.addEventListener('click',validateresult);
        div.style.backgroundColor = i == ansindex? randomcolor:generaterandomColorRGB();
        optionscontainer.append(div);
    }
}

// window.addEventListener('load',()=>startgame())
window.addEventListener("load", () => {
    score = Number(localStorage.getItem("score")) || 0;
    scorecontainer.innerText = score;
    startgame();
});