import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
const sequelize = require("../config/connection");

const SequelizeStoreInstance = SequelizeStore(session.Store);

const sess: any = {
  secret: "the biggest secret",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStoreInstance({
    db: sequelize,
  }),
};

export default function configureSession(req: any, res: any, next: any): any {
  const sessMiddleware = session(sess);
  return sessMiddleware(req, res, next);
}
