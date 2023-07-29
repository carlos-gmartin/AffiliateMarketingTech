const express = require("express");
const app = express();
  
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

const PORT = process.env.PORT || 8000;
const hostname = '127.0.0.1';

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});