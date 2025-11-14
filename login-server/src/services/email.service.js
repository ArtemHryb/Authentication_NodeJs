import nodemailer from "nodemailer";
import dotenv from "dotenv";

const transporter = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: process.env.SMTP_PORT,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const info = await transporter.sendMail({
  // from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
  to: "wisicap707@gusronk.com",
  subject: "Hello ✔",
  text: "Hello world?", // plain‑text body
  html: "<b>Hello world?</b>", // HTML body
});

console.log("Email is send");
