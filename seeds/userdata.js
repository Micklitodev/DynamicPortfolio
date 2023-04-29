const { User } = require("../models");

const userdata = [
  {
    user_name: "FrankTheTank",
    email: "Ftank@gmail.com",
    password: "password",
  },
  {
    user_name: "JimBob",
    email: "jBob@gmail.com",
    password: "password",
  },
];

const userSeeds = () => User.bulkCreate(userdata);

module.exports = userSeeds;
