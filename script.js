"use strict";
    const getWeather=(location)=> {
    const API_KEY = "20cf7cc3ef1905f013c409e09238aca4";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    fetch(API_URL).then((response) => {
      if(response.status==404){
        document.getElementById("weather-data").innerHTML= "Error: City not found";
      }else if(response.status==200){
         return response.json();
      }else{
        document.getElementById("weather-data").innerHTML= "Error: Failed to fetch weather data";
      }
    }).then((data)=>{
      const cityName = data.name;
      const weatherDescription = data.weather[0].main;
      const temp = data.main.temp;
      console.log(data);

      document.getElementById("weather-data").innerHTML= `<h1>${cityName}</h1><h4>${weatherDescription}</h4><p>${temp} &#x2103;</p>`;
    }).catch((error) => {
      document.getElementById("weather-data").innerHTML= "<span class='text-danger'>Error: Failed to fetch weather data</span>";
    });
  }

  document.getElementById("location-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const inputCity = document.getElementById("location-input").value;
    document.getElementById("location-input").value="";
    getWeather(inputCity);
  });

