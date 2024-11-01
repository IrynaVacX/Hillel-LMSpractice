"use strict";
const apiKey = "e5d371c4093e88c5cb3effa3afb0b409";
const city = "Odesa";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    document.querySelector(".location").textContent = data.name;
    document.querySelector(".temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".description").textContent = data.weather[0].description;
    document.querySelector(".weather-icon").src = 
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  }
  catch (error) {
    console.error("Error fetching weather data :", error);
    document.querySelector(".location").textContent =
      "Error loading weather data";
  }
}

document.getElementById("updateWeatherBtn").addEventListener("click", getWeather);
getWeather();
