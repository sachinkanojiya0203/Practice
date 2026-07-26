const el= document.getElementById('username') // access the id using getElementById

console.log(el.innerText)  // Convert into plan text 
el.innerText="dhaval pandit" // change color

el.classList.add("redcolor") //apply css
console.log(el.innerText)


el.style.textDecoration="underline"
el.style.color="blue"
el.parentElement.style.backgroundColor="green"

el.remove()
const cd=document.getElementsByClassName("code")
cd.classList.remove('redcolor')// remove css


