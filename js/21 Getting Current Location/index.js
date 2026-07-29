const getbtn = document.getElementById('click-location')
const ulocation = document.getElementById('USER-location')

async function getdata(lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=11d9b92e44fb403091261754240208&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}

getbtn.addEventListener('click', async () => {
    const lvalue = navigator.geolocation.getCurrentPosition(async (position) => {  //navigator 
        const result = await getdata(position.coords.latitude, position.coords.longitude);
        console.log("get location", result);
    }, () => {
        console.log("there an issue");

    });
});