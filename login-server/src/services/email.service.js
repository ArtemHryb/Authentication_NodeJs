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

function send({ email, subject, html }) {
  return transporter.sendMail({
    to: email,
    subject,
    html,
  });
}

function sendActivationEmail(email, token) {
  const href = `${process.env.CLIENT_HOST}/activation/${token}`;

  const html = `
  <h1>Activate your account</h1>
  <a href="${href}">Click <b>${href}</b> to activate your account</a>
  `;

  return send({ email, subject: "Activate your account", html });
}

export const emailService = {
  sendActivationEmail,
  send,
};

console.log("Message sent");
