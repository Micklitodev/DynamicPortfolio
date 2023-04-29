import type { NextApiRequest, NextApiResponse } from "next";
import { Review } from "../../models";

const sequelize = require("../../config/connection");

sequelize.sync({ force: false }).then((): any => {
  console.log("Sucessfuly db sync");
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const reviews = await Review.findAll();
    const RevArr = reviews.map((rev: any) => rev.get({ plain: true }));
    res.status(200).send({ RevArr });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
