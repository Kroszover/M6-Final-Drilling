const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 8090;

app.use(express.static("public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.set("views", __dirname + "/views");

//Ruta para ingresar por id
app.get("/animes/:id", (req, res) => {
  const id = req.params.id;
  const anime = require("./data/anime.json")[id];
  res.render("anime", { anime });
  console.log(anime.id);
});

app.get("/", (req, res) => {
  res.render("index");
});
//CRUD

//Read
app.get("/animes", (req, res) => {
  const animes = require("./data/anime.json");
  res.render("animes", { animes });
  console.log(animes);
});

//Update
app.get("/animes/update", (req, res) => {
  res.render("update");
});

//Delete
app.get("/animes/delete", (req, res) => {
  res.render("delete");
});

app.listen(port, () => {
  console.log(`escuchando servidor en: http://localhost:${port}`);
});

// Path: package.json
