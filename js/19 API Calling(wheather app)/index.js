const search=document.getElementById('search-btn')
const cityinput=document.getElementById('city-input')
const cityname=document.getElementById('city-name')
const time=document.getElementById('city-time')
const temp=document.getElementById('city-temp')

async function getdata(cityname){
   const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=11d9b92e44fb403091261754240208&q=${cityname}&aqi=yes`);
   return await promise.json();
}

search.addEventListener('click',async()=>{
    const value=cityinput.value
    const result=await getdata(value)
    cityname.innerText=`${result.location.name},${result.location.region},${result.location.country}`
    time.innerText=result.location.localtime
    temp.innerHTML=`${result.current.temp_c} C`
    console.log(result)
})

// http://api.weatherapi.com/v1/current.json?key=11d9b92e44fb403091261754240208&q=London&aqi=yes