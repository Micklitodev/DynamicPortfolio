import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../models";
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

      const getUser = await User.findOne({
        where: {
          email: body.email,
        },
      });

      if (!getUser) {
        res
          .status(404)
          .json({ message: "Invalid Credentials , Please try agian. " });
        return;
      }

      const verifyPass: any = await getUser.verifyPassword(body.password);

      if (!verifyPass) {
        res
          .status(404)
          .json({ message: "Invalid Credentials , Please try again. " });
        return;
      }

      const setuser: any = await getUser.userName();

      req.session.save((): any => {
        req.session.loggedIn = true;
        req.session.currentuser = setuser;
        res.status(200).json({ loggedIn: true });
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
