import express from "express";
import "dotenv/config";
import { authRouter } from "./routes/auth.route.js";

const PORT = process.env.PORT;

const app = express();

app.use(authRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
