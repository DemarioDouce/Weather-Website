//core module
const path = require("path");
//npm module
const express = require("express");
const hbs = require("hbs");

//path to dir
console.log(__dirname);
//path to file
console.log(path.join(__dirname, "../public"));

//paths
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();

//static dir to serve
app.use(express.static(viewsPath));

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: "Demario" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About me", name: "Demario" });
});

app.get("/help", (req, res) => {
  res.render("help", { message: "Help me", name: "Demario", title: "Help" });
});

app.get("*", (req, res) => {
  res.render("404", {
    message: "Page not found",
    name: "Demario",
    title: "404",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    message: "Page not found",
    name: "Demario",
    title: "404",
  });
});

app.get("/weather", (req, res) => {
  res.send({ Forecast: "Rain", location: "Toronto" });
});

app.listen(3000, () => {
  console.log("Server is up ");
});
