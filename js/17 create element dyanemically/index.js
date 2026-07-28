const cont=document.getElementById('container')
const btn=document.getElementById('click-button')

btn.addEventListener("click", () => {
    const el=document.createElement('h1')
    el.innerText="sachin kanojiya"
    cont.appendChild(el);
})