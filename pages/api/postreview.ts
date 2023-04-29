import type { NextApiRequest, NextApiResponse } from "next";
import { Review } from "../../models";
import configureSession from "../../middleware/session";

interface CustomApiRequest extends NextApiRequest {
  session: any;
}

export default async function handler(
  req: CustomApiRequest,
  res: NextApiResponse
) {
  try {
    await configureSession(req, res, async () => {
      const body = JSON.parse(req.body);

      const createRev = Review.create({
        user_name: req.session.currentuser,
        rating: body.rating,
        content: body.content,
      });

      res.status(200).json({ createRev });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
