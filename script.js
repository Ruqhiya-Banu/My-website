const apiKey = "55453283a5c25b3dab1d024266216538"; // Replace this

document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <h3>${data.name}</h3>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>🌥 Condition: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById("result").innerHTML = "City not found!";
    }
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching weather data!";
  }
}
