import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./weather.css";
import weatherDescKo from "../../assets/data/weatherDescKo";
import cityNames from "../../assets/data/cityName";

const Weather = () => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");

  const getWeather = useCallback(
    async (lat, lon) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const cityInfo = cityNames.find((city) => city[res.data.name]);
        setCityName(cityInfo ? Object.values(cityInfo)[0] : res.data.name);
        const weatherId = res.data.weather[0].id;
        const weatherKo = weatherDescKo.find((weather) => weather[weatherId]);
        const weatherDesc = weatherKo ? Object.values(weatherKo)[0] : "Unknown";
        const weatherIcon = res.data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        const temp = Math.round(res.data.main.temp);
        setWeather({
          description: weatherDesc,
          name: cityName,
          temp: temp,
          icon: weatherIconAdrs,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [API_KEY, cityName]
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, [getWeather]);

  return (
    <div className="weather-container">
      {weather ? (
        <div className="weather-item">
          <div className="h2-item">
            <h2>{cityName}</h2>
          </div>
          <p>{weather.description}</p>
          <p>{weather.temp} °C</p>
          <img className="weather-img" src={weather.icon} alt="Weather Icon" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
