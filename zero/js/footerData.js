
async function LocationUpdate(geolocation) {
    WeatherUpdate(geolocation);
    const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?
        latitude=${JSON.stringify(geolocation.coords.latitude)}
        &longitude=${JSON.stringify(geolocation.coords.longitude)}`
    );
    const json = await response.json();
    const continent = json.continent;
    const city = json.city;
    document.querySelector("#system-location").innerHTML = `${city}, ${continent}`;
}

async function WeatherUpdate(geolocation) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${JSON.stringify(geolocation.coords.latitude)}&longitude=${JSON.stringify(geolocation.coords.longitude)}&current=temperature_2m,wind_speed_10m`)
    const json = await response.json();
    const temp = json.current.temperature_2m;
    const wind = json.current.wind_speed_10m;
    document.querySelector("#system-weather").innerHTML = `temp = ${temp} deg | wind = ${wind} m/s`
}

function UpdateSystemTime(){
    const dateObject = new Date()
    const time = dateObject.toLocaleTimeString("en-uk");
    const date = dateObject.toLocaleDateString("en-uk");
    document.querySelector("#system-time").innerHTML = time;
    document.querySelector("#system-date").innerHTML = date;
}

function UpdateGeolocationData(){
    navigator.geolocation.getCurrentPosition(LocationUpdate);
}

UpdateGeolocationData();
const geolocationInterval = setInterval(UpdateGeolocationData, 1000*60*10);

UpdateSystemTime();
const systemTimeInterval = setInterval(UpdateSystemTime, 1000);