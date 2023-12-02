const API_KEY = "5e39635e1c52926070861ca4a0c194a4";
const weather_url = `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=${API_KEY}`;
const forecast_url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`;

export const getWeatherData = async (location) => {
  try {
    const response = await fetch(weather_url);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("erorr fetching weather data", error);
    throw error;
  }
} 

export const getForecastData = async (location) => {
  try {
    const response = await fetch(weather_url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("erorr fetching forecast data", error);
    throw error;
  }
};
