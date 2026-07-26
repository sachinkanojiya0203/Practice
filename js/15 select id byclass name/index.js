let le=document.getElementsByClassName("block")
console.log(le)

for(let i=0; i<le.length; i++){
    le.item(i).style.background="blue"
}



let le2=document.getElementsByClassName("paragraph")
console.log(le2)

for(let i=0; i<le2.length;){
    le2.item(i).remove()
}