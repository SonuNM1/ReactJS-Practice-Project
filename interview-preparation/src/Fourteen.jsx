import React, { useEffect, useState } from 'react' ; 
import './style/Fourteen.css'; 

function Fourteen() {

    const [weather, setWeather] = useState('') ; 

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude = position.coords.latitude ; 
                const longitude = position.coords.longitude ; 

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=53efbfb8bd7756c937f2969070beb2c5`)
                .then((response)=>response.json())
                .then((data)=> {
                    const tempInCelsius = (data.main.temp - 273.15).toFixed(1) ; 
                    setWeather({...data, main: {...data.main, temp: tempInCelsius}})
                }) ; 
                
            })
        }
    },[])

  return (
    <div className='container'>
        {
            weather ? (
                <div>
                    <h2 className='title'>Current weather</h2>
                    <p className='temp'>Temperature: {weather.main.temp}°C</p>
                    <p className='condition'>Conditions: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>
                    Loading (give location access) . . . .
                </p>
            )
        }
    </div>
  )
}

export default Fourteen