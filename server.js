// importing installed library

const express = require("express");
const app = express();

// route
app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "mango"] });
});

// server
app.listen("8080");
