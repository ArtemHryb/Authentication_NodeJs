import express from "express";
import "dotenv/config";
import { authRouter } from "./routes/auth.route.js";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_HOST,
    credentials: true
  })
);

app.use(authRouter);
app.use('/users', userRouter)

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
