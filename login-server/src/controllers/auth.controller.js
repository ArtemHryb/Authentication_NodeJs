import { User } from "../models/user.js";
import { emailService } from "../services/email.service.js";
import { v4 as uuidv4 } from "uuid";

const register = async (req, res) => {
  const { email, password } = req.body;
  const activationToken = uuidv4();

  const newUser = await User.create({email, password, activationToken});
  await emailService.sendActivationEmail(email, activationToken);
  res.send(newUser);
};

const activate = async (req, res) => {
  const { activationToken } = req.params;

  const user = await User.findOne({
    where: { activationToken },
  });

  if (!user) {
    return res.sendStatus(404);
  }

  user.activationToken = null;
  user.save();

  res.send(user);
};

export const authController = {
  register,
  activate,
};
