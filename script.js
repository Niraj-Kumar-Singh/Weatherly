const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const key = "c9a30342fd7d85450c5fb8613c4d3e53";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(API + city + `&appid=${key}`);
    const data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

        // console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";


        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    


}


searchButton.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
})