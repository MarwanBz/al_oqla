import React from 'react'

export const Forecast = ({forecastData}) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {forecastData.map((dayData) => (
          <WeatherCard key={dayData.date} dayData={dayData} />
        ))}
      </div>
    </div>
  );
}
