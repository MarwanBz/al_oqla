import { getForecastData, getWeatherData } from "./services/WeatherService";

import SearchBar from "./components/SearchBar";
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);

const handleSearch = async (location) => {
  try {
    const weatherData = await getWeatherData(location);
    // const forecastData = await getForecastData(location);
    setCurrentWeather(weatherData);
    setForecastData(forecastData);
  } catch (error) {
    console.log("error" , error)
  }
};
  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch} />
        <h1>
          <span>React Weather App</span>
        </h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
    </>
  );
}

export default App
