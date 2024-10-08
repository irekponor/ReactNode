// importing installed library

const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

// route
app.get("/api", (req, res) => {
  res.json({ food: ["bread", "egg", "sardine"] });
});

// server
app.listen("8080");
