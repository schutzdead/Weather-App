import {skeleton} from "./skeleton"
import { basicFunction } from "./basicFunction"

const alea:string = "5b81cbcb4229f4eaf3ed469677aae265";
export var mainWeather:string = "";

export async function weatherData (location:string) {
    try{

      const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${alea}&units=metric`)
      let weatherJSON = await weatherData.json()

      mainWeather = weatherJSON.weather[0].main
      skeleton.cityDiv.textContent = `${weatherJSON.name} (${weatherJSON.sys.country})`;
      skeleton.degreeDiv.textContent = `${Math.round((weatherJSON.main.temp))}°C`
      skeleton.weatherImg.src = `https://openweathermap.org/img/wn/${weatherJSON.weather[0].icon}@2x.png`

      let weather = weatherJSON.weather[0].description;
      skeleton.weatherDiv.textContent = weather.slice(0,1).toUpperCase()
                              + weather.slice(1, weather.lenght)
                              
      basicFunction().changeBG()
      basicFunction().defTime()
      console.log(weatherJSON);

    }catch(err){
      skeleton.locationInput.value =""
      skeleton.locationInput.placeholder = "Sorry, not found ! "
      console.log(err);
    }
  }