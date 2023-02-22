const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer EaTsfg77P62MfvWDRsutvV78',
  'Accept': 'application/json',
};


app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
  res.setHeader(headers);
  res.send();
});

app.listen(PORT, () => {
  console.log(`the server is listening on port ${PORT}`);
});
