//npm modules
const { get } = require("request");
const request = require("request");

//global variables
const apiKey = "5c5d6e30ba72c04e9d014b3a7c6c57af";
var tempUnit = "metric";

//function to get weather
const getWeather = (cityName, callback) => {
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(cityName) +
    "&units=" +
    encodeURIComponent(tempUnit) +
    "&appid=" +
    encodeURIComponent(apiKey);

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (body.cod === "400") {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        "temp: " +
          body.main.temp +
          " description: " +
          body.weather[0].description
      );
    }
  });
};

module.exports = {
  getWeather,
};
