const API_KEY = `da731dd9dd6d32dd0d97bc0e0a980dcb`;

const searchTemp = () => {
  const inputCity = document.getElementById("city-name");
  const cityText = inputCity.value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeatherResult(data));
};

const setInnerText = (id, text) => {
  const setInner = document.getElementById(id);
  setInner.innerText = text;
};
const displayWeatherResult = (temp) => {
  console.log(temp);
  setInnerText("city", temp.name);
  setInnerText("temp", temp.main.temp);
  setInnerText("condition", temp.weather[0].main);
  const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  const imageIcon = document.getElementById("weather-icon");
  imageIcon.setAttribute("src", url);
};
