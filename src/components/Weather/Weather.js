import { useEffect, useState } from "react";
import React from "react";
import "./weather.css";
import axios from "axios";
import weatherDescKo from "../../assets/data/weatherDescKo";
import cityNames from "../../assets/data/cityName";

const Weather = () => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, []);

  const getWeather = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      // setCityName(res.data.name);
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
  };

  return (
    <div className="weather_container">
      {weather ? (
        <div className="weather_item">
          <div className="h2_item">
            <h2>{cityName}</h2>
          </div>
          <p>{weather.description}</p>
          <p>{weather.temp} °C</p>
          <img className="weather_img" src={weather.icon} alt="Weather Icon" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
