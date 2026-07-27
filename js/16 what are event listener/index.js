let cl=document.getElementById('clic')
let nb=document.getElementById('name-block')
function funclick(){
    if(nb.style.color=="red"){
        nb.style.color='blue'
    }else{
        nb.style.color='red'
    }
}

cl.addEventListener('click',funclick)