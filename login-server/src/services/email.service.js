import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const info = await transporter.sendMail({
  // from: '',
  to: 'kebibim547@etramay.com',
  subject: 'HELLO)))',
  text: 'Hello world?',
  html: '<b>Hello world?</b>',
});

console.log('Message sent');

