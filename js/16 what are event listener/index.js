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

// delet element on html

const allchild=document.querySelector('body').children

for(let i=0;i<allchild.length;i++){

    allchild.item(i).addEventListener('click',()=>{
        allchild.item(i).remove();
    })
}