const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

console.log(PORT)

app.use(express.json());
app.use(cors());

app.post("/send", (req, res) => {
  console.log(req.body);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send("Received a POST HTTP request");
});

app.listen(PORT, () => {
  console.log(`the server is listening on port ${PORT}`);
});