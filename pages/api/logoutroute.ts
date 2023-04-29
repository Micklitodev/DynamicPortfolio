import type { NextApiRequest, NextApiResponse } from "next";
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
      if (req.session.loggedIn === true) {
        req.session.destroy();
      }
    });

    res.status(200).json({ loggedIn: false });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
