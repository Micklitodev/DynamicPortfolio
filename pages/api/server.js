import { apiRouteHandler } from 'next';


import cors from "cors";

const corsOptions = {
  origin: "*",
  methods: ["POST"],
};

const handler = (req, res) => {
  console.log(req.body);
  res.status(200).send("Received a POST HTTP request");
};

const apiHandler = (req, res) => {
  return cors(corsOptions)(handler)(req, res);
};

export default apiRouteHandler(apiHandler);