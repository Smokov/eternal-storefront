const express = require("express");
// const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/images", express.static("./build/assets/images/"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
