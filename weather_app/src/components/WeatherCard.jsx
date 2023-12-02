import React from 'react'

export const WeatherCard = () => {
  return (
    <div className="weather-card">
      <h3>{dayData.date}</h3>
      <p>{dayData.weatherDescription}</p>
      <p>Temperature: {dayData.temperature}°C</p>
      <p>Humidity: {dayData.humidity}%</p>
    </div>
  );
}
