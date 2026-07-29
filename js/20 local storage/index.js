const btn=document.getElementById("click-btn")
const user=document.getElementById("user-input")
const userout=document.getElementById("USER-OUT")

btn.addEventListener("click",()=>{
    const uvalue=user.value;
    // console.log(uvalue)
   localStorage.setItem("name",uvalue);
   location.reload(); 
});

window.addEventListener('load',()=>{
    const userou=localStorage.getItem("name");
    userout.innerText = userou
})

