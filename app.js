const API_KEY = `da731dd9dd6d32dd0d97bc0e0a980dcb`;

const searchTemp = async () => {
  const city = document.getElementById("city-name");
  const cityName = city.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayWeatherResult(data);
};

const setInnerText = (id, text) => {
  const inputText = document.getElementById(id);
  inputText.innerText = text;
};
const displayWeatherResult = (temp) => {
  // console.log(temp);
  setInnerText("city", temp.name);
  setInnerText("temp", temp.main.temp);
  setInnerText("condition", temp.weather[0].main);

  // set weather icon
  const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;

  const imageIcon = document.getElementById("weather-icon");
  imageIcon.setAttribute("src", url);
};
