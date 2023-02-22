const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "max-age=3600");
  res.send(); 
});

app.listen(PORT, () => {
  console.log(`the server is listening on port ${PORT}`);
});