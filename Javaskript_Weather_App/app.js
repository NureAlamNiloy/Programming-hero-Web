const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notifecation");

//app data 
const weather ={};

weather.temperature = {
    unit : "celsius"
}

// app consts and vars
const kelvin = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else{
    notificationElement.getElementsByClassName.display ="block";
    notificationElement.innerHTML = "<p> Browser dosen't support Geolocation </p>"
}

//Set user's position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//Show Error when they have any Issue

function showError(error){
    notificationElement.getElementsByClassName.display ="block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`
}

//Get weather from api
function getWeather(latitude, longitude){

    let api =`https://samples.openweathermap.org/data/2.5/weather?
    lat=${latitude}&Dhaka=${longitude}&appid=${key}`;
    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
        
    })
    .then(function(){
        displayWeather();
    });

}

//Display weather

function displayWeather(){
    iconElement.innerHTML = `<img src="icon/${weather.iconId}.png/>`;
    tempElement.innerHTML = `${weather.temperature.value}০ <span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`
}



















