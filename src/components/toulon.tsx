"use client";

import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
dotenv.config();


const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.API;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=toulon&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeatherData();

  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!weatherData) return null;

  return (
    <div>
      <h2>Weather in Toulon</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherComponent;