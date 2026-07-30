const stp_btn=document.getElementById("stop-btn")
function showtime(){
    const currenttime=new Date();
    const time=`${currenttime.getHours()}:${currenttime.getMinutes()}:${currenttime.getSeconds()}`
    document.getElementById('time').innerText=time
}

let interval=setInterval(showtime,1000);

stp_btn.addEventListener('click',()=>{
    clearInterval(interval)
})