const colorcodecontainer=document.getElementById("color-code");
const optionscontainer=document.getElementById("option-container")
let guesscolor=null;
function generaterandomNumberBetween(min,max){
    return min+ Math.floor(Math.random()*(max-min+1));

};

function generaterandomColorRGB(){
    const red=generaterandomNumberBetween(0,255);
    const green=generaterandomNumberBetween(0,255);
    const blue=generaterandomNumberBetween(0,255);

    return `rgb(${red},${green},${blue})`;

}

// console.log(generaterandomColorRGB());

function startgame(){
    randomcolor=generaterandomColorRGB();
    colorcodecontainer.innerText=randomcolor;
    
    for(let i=0; i<6; i++){
        const div=document.createElement("div")
        div.style.backgroundColor=generaterandomColorRGB()
        optionscontainer.append(div)
    }
}

window.addEventListener('load',()=>startgame())