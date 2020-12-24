//document elemet selection
const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const weatherData = document.querySelector("#weatherData");
const weatherError = document.querySelector("#weatherError");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let location = input.value;
  weatherData.textContent = "loading....";
  fetch(
    "http://localhost:3000/weather?cityName=" + encodeURIComponent(location)
  ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weatherError.textContent = data.error;
        weatherData.textContent = "";
      } else {
        weatherData.textContent = JSON.stringify(data);
        weatherError.textContent = "";
      }
    });
  });
});
