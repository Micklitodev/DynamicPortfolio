import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);

    const createUser = User.create({
      user_name: body.username,
      email: body.email,
      password: body.password,
    });

    res.status(200).json(createUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
