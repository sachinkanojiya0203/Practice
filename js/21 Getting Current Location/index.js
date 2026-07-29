const getbtn=document.getElementById('click-location')
const ulocation=document.getElementById('USER-location')

getbtn.addEventListener('click',async ()=>{
    const lvalue=navigator.geolocation.getCurrentPosition((position)=>{  //navigator 
        console.log("get location",position)
    },()=>{
        console.log("there an issue")

    });
})