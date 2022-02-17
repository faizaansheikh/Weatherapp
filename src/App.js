
import './App.css';
import cloud from "../src/cloud.jpg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BsFillSunFill } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { FaCity } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";

import React, { useEffect, useState } from 'react';
function App() {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");
  const [searchCityState, setSearchCityState] = useState("karachi");
  useEffect(() => {
    fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&units=metric&appid=bfd89c2a14fbbdad794eefbab688cd60`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      })
      .catch((err) => {
        console.log("0rrr", err);
      });
  }, [cityName]);

  const searchCity = (e) => {
    setSearchCityState(cityName);
    
  };
  
  
  return (
    <>
 <div className='container-fluid bg'>
   <h1 className='text-center head'>WEATHER</h1>
   <div className='row'>
  <div className='col-12 col-sm-12 col-md-6 maindiv'>
    <div className='content'>
   <span className='icon'> <BsFillSunFill size={150} color="yellow"/> 
    </span>
    
    <h1 className='htwo'>{weatherData && weatherData.main && weatherData.main.temp}°C</h1> 
    <span className='p'>
    <p>Min_temp {weatherData && weatherData.main && weatherData.main.temp_min}</p> 
    <p>Max_temp {weatherData && weatherData.main && weatherData.main.temp_max}</p>
    </span>

    <h1>{weatherData && weatherData.name}</h1>
    </div>
  </div>
  <div className='col-12 col-sm-12 col-md-6 cdiv'>
 <div className='iput'> <input
          type="text"
          value={cityName}
          className="enter"
          placeholder="Enter City name"
          placeholder="Enter another city"
          onChange={(event) => setCityName(event.target.value)}
  />
  <button onClick={searchCity}><GrSearch size={25}/></button>
  </div>
<div className='list'>
<li>CITY: <FaCity/> {weatherData && weatherData.name} </li>
      <li>Temp: <FaTemperatureHigh/> {weatherData && weatherData.main && weatherData.main.temp} </li>
      <li>
        Condition:<BiWind/>{" "}
        {weatherData &&
          weatherData.weather &&
          weatherData.weather[0] &&
          weatherData.weather[0].main}
      </li>
      <li>Feels like: {weatherData && weatherData.main && weatherData.main.feels_like} </li>
      <li>Humidity:<WiHumidity size={30}/> {weatherData && weatherData.main && weatherData.main.humidity}%</li>
      <li>Pressure: {weatherData && weatherData.main && weatherData.main.pressure} </li>
      
      </div>
  </div>
  </div>
  
 </div>



 
</>
  );
}

export default App;
