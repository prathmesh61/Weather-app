const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const search = document.getElementById("search");
const form = document.getElementById("form");
const weather = document.getElementById("weather-app-content-cont");

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  weather.innerHTML = `
  <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Img" />
  <div>
    <h3 class="weather-degree">${data.main.temp} ℃</h3>
    <p class="weather-condition">${data.weather[0].description}</p>
  </div>

  `;
};

// const showWeather = (data) => {
//   if (data.cod == "404") {
//     weather.innerHTML = `<h2> City Not Found <h2>`;
//     return;
//   }
//   weather.innerHTML = `
//       <div>
//           <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//       </div>
//       <div>
//           <h2>${data.main.temp} ℃</h2>
//           <h4> ${data.weather[0].main} </h4>
//       </div>
//   `;
// };

// form.addEventListener("submit", function (event) {
//   getWeather(search.value);
//   event.preventDefault();
// });

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
