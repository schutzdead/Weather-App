import {skeleton} from "./skeleton"
import {format} from 'date-fns'
import { mainWeather } from "./API"



export const basicFunction = () => {

    const createBG = (imageBG:any) => {
        skeleton.body.setAttribute('style',`background-image:url("src/picture/${imageBG}")`) 
    }

    const changeBG = () => {
        console.log(mainWeather);
        
        switch(mainWeather){
            case "Rain":
            createBG('rain.jpg');
            break
            case "Clouds":
            createBG('cloud.webp');
            break
            case "Mist":
            createBG('snow.jpg');
            break
            case "Clear":   
            createBG('sun.jpg');
            break
            default:
            createBG('cloud.webp');
        }
    }

    const defTime = () => {
        var currentDate = new Date() as Date
        var fullDay = format(currentDate, 'EEEE, dd LLL yyyy')
        var fullTime = format(currentDate, 'k:mm')
        skeleton.date.innerHTML=`${fullDay} <br> ${fullTime}`
    }

    return{mainWeather, createBG, changeBG, defTime}
}
