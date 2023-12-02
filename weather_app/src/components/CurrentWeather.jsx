import React from 'react'

export const CurrentWeather = ({weather}) => {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>{weather.location}</p>
      <p>{weather.weatherDescription}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
}
