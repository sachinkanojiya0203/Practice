const input=document.getElementById("number-input");

function handleClickButton(el){
    console.log(el.innerText);
    const exp= input.value + el.innerText;
    input.value=exp;
}