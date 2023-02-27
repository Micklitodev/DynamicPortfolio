import { apiRouteHandler } from 'next';
import cors from "cors"
import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config();

const corsOptions = {
  origin: "/",
  methods: ["POST"],
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', 
  port: 587, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const handler = async (req, res) => {
  try {
    const { email, name, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New message from ${name}`,
      text: `${name} (${email}) says: ${message}`,
    });

    res.status(200).send("Email sent successfully")
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email")
  }
};

const apiHandler = (req, res) => {
  return cors(corsOptions)(handler)(req, res);
};

export default apiRouteHandler(apiHandler);
