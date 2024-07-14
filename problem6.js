const axios = require("axios");

async function getWeather(city) {
  const apiKey = "3f35f6b77b95400b8dd107eba7833982";
  const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric", // Use 'imperial' for Fahrenheit
      },
    });

    const data = response.data;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(
      `Description: ${
        description.charAt(0).toUpperCase() + description.slice(1)
      }`
    );
  } catch (error) {
    if (error.response) {
      console.log(`Lỗi: Không thể lấy thông tin thời tiết của ${city}`);
    } else {
      console.log("Lỗi:", error.message);
    }
  }
}

getWeather("Ho Chi Minh");
