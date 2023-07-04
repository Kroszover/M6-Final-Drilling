const express = require("express");
const app = express();
const hbs = require("handlebars");
const port = 8090;

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

//Ruta para ingresar por id
app.get("/animes/:id", (req, res) => {
  const id = req.params.id;
  const anime = require("./data/anime.json")[id];
  res.render("anime", { anime });
  console.log(anime.id);
});

//CRUD
//Create
app.get("/animes/create", (req, res) => {
  res.render("create");
});

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
