const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/api/contact", (req, res) => {
  console.log(req.body);
  res.status(200).send("Received a POST HTTP request");
});

app.listen(PORT, () => {
  console.log(`the server is listening on port ${PORT}`);
});

