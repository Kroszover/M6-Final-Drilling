const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Página de inicio");
});

app.listen(port, () => {
  console.log(`escuchando servidor en: http://localhost:${port}`);
});

// Path: package.json
