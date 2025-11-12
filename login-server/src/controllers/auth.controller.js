// import { user } from "../models/user.js";
import { prisma } from "../../prisma/prisma.js";

const register = async (req, res) => {
  const { email, password } = req.body;

  // const newUser = await user.create({ email, password });
  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: password,
    },
  });

  res.send(newUser);
};

export const authController = {
  register,
};
