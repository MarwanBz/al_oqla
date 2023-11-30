const API_KEY = "5e39635e1c52926070861ca4a0c194a4";
const base_url = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}`

export const getWeatherData = async (location) => {
  try {
    const response = await fetch(base_url);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("erorr fetching weather data", error);
    throw error;
  }
} 
