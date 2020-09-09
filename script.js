const api = {
  key: "a8cd32c11e3b631b22029bdee78fc285",
  base: "https://api.openweathermap.org/data/2.5/",
};
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

/*const degree = document.getElementById("degree");
degree.addEventListener("click", changeDegree);

function changeDegree() {
  temp.innerHTML = `${Math.round(
    (weather.main.temp * 9) / 5 + 32
  )}<span>°F</span>`;
}*/

object.onload = function () {};

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(`.location .date`);
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(
    (weather.main.temp * 9) / 5 + 32
  )}<span>°F</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerHTML = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(
    (weather.main.temp_min * 9) / 5 + 32
  )}°F / ${Math.round((weather.main.temp_max * 9) / 5 + 32)}°F`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${month} ${date} ${year}`;
}
