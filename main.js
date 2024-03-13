const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const cityName = cityInput.value;

  getData(cityName);
});

function getData(name) {
  const API = "549462c58deb7499874e0acd474661fc";
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=en`;

  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        weather: [{ description }],
        main: { temp, temp_min, temp_max, humidity, feels_like },
        wind: { speed },
        sys: { country },
      } = data;

      const city = document.querySelector(".city");
      const temperature = document.querySelector(".temp");
      const maxTemp = document.querySelector(".max");
      const minTemp = document.querySelector(".min");
      const hum = document.querySelector(".humidity");
      const wind = document.querySelector(".wind");
      const weatherCond = document.querySelector(".weather");
      const feeling = document.querySelector(".feeling");

      city.textContent = ` ${name}, ${country}`;
      temperature.innerText = `${temp.toFixed(0)}°`;
      maxTemp.innerText = `Max Temp : ${temp_max.toFixed(0)}°`;
      minTemp.innerText = `Min Temp : ${temp_min.toFixed(0)}°`;
      hum.innerHTML = `Humidity : ${humidity}%`;
      wind.innerHTML = `Wind : ${speed} km/h`;
      weatherCond.innerHTML = `${description.toUpperCase()}`;
      feeling.textContent = `Feels : ${feels_like.toFixed(0)}°`;

      console.log(data)
    })
    .catch((err) => console.log(err));

  cityInput.value = "";

  cityInput.focus();
}
