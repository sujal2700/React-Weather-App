import styled from 'styled-components';
import City from "./modules/City";
import WeatherComponent from './modules/WeatherInfo';
import { useState } from 'react';
import axios from 'axios';
export const WeatherIcons = {
    "01d": "/icons/sunny.jpg",
    "01n": "/icons/night.jpg",
    "02d": "/icons/day.jpg",
    "02n": "/icons/cloudy-night.jpg",
    "03d": "/icons/cloudy.jpg",
    "03n": "/icons/cloudy-night.jpg",
    "04d": "/icons/day.jpg",
    "04n": "/icons/cloudy-night.jpg",
    "09d": "/icons/rain.jpg",
    "09n": "/icons/rainy-night.jpg",
    "10d": "/icons/rain.jpg",
    "10n": "/icons/rainy-night.jpg",
    "11d": "/icons/storm.jpg",
    "11n": "/icons/storm.jpg",
    "13d": "/icons/snow.jpg",
    "13n": "/icons/snow.jpg",
    "50d": "/icons/day-mist.png",
    "50n": "/icons/night-mist.png",

};

const API_KEY = "8fadb7c97ce2d7d19f5a4bb98a5f2814";
const Container = styled.div `
display:flex;
flex-direction:column;
margin:auto;
align-item:center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius:4px;
width:380px;
background:white;
`;

const Weather = styled.div `
display:flex;
flex-direction:column;
`;
const AppLabel = styled.span `
color:black;
font-size:18px;
font-weight:bold;
text-align:center;
`;

function App() {
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();
    const fetchWeather = async(e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
        
        `);
        updateWeather(response.data);
    };
    return ( < Container >
        <
        AppLabel > React Weather App < /AppLabel>  {
        weather ? ( < WeatherComponent weather = { weather }
            />):( <
            City updateCity = { updateCity }
            fetchWeather = { fetchWeather }
            / >) } </Container >
        );
    }

    export default App;