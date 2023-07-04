const express = require("express");
const app = express();
const hbs = require("handlebars");
const port = 8090;

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/animes", (req, res) => {
  const animes = require("./data/anime.json");
  res.render("animes", { animes });
  console.log(animes);
});

app.get("/animes/:id", (req, res) => {
  const id = req.params.id;
  const anime = require("./data/anime.json")[id];
  res.render("anime", { anime });
  console.log(anime);
});

app.listen(port, () => {
  console.log(`escuchando servidor en: http://localhost:${port}`);
});

// Path: package.json
