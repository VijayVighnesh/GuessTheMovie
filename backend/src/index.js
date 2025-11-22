// src/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors()); // allow requests from localhost dev servers

// simple API returning JSON

const messsage = "Hello from backend!";

app.get("/api/message", (req, res) => {
  res.json({ message: messsage });
});

// root for quick health-check
app.get("/", (req, res) => res.send("OK"));

const port = process.env.PORT || 5001;
app.listen(port, "127.0.0.1", () =>
  console.log(`Server running on http://127.0.0.1:${port}`)
);
