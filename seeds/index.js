const sequelize = require("../config/connection");

const userSeeds = require("./userdata");
const reviewSeeds = require("./reviewdata");

const seed = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();

  await reviewSeeds();

  process.exit(0);
};

seed();
