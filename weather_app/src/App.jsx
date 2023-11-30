import { getWeatherData } from "./services/WeatherService";
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
console.log(getWeatherData);
  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
