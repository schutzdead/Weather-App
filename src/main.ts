import './style.css'
import { weatherData } from './API';
import { skeleton } from './skeleton';

weatherData ("Arabie Saoudite")

document.addEventListener('keydown' , (e) => {
  if(e.key === 'Enter'){
    weatherData(skeleton.locationInput.value)
  }
})

skeleton.searchButton.addEventListener('click', () => {
  weatherData(skeleton.locationInput.value)
})