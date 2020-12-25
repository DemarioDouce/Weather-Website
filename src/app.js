//core module
const path = require("path");
//npm module
const express = require("express");
const hbs = require("hbs");
//custom module
const weather = require("./utils/weather");
const { response } = require("express");

//path to dir
console.log(__dirname);
//path to file
console.log(path.join(__dirname, "../public"));

//paths
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();

//static dir to serve
app.use(express.static(publicDirectoryPath));

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: " Demario Douce" });
});

app.get("/weather", (req, res) => {
  if (!req.query.cityName) {
    res.send({ error: "Please provide a city name." });
  } else {
    weather.getWeather(req.query.cityName, (error, response) => {
      if (error) {
        res.send({
          error: error,
        });
      } else {
        res.send({
          location: req.query.cityName,
          Temp: response.temp,
          Description: response.description,
        });
      }
    });
  }
});

app.get("*", (req, res) => {
  res.render("404", {
    message: "Page not found",
    name: "Demario",
    title: "404",
  });
});

app.listen(3000, () => {
  console.log("Server is up ");
});
