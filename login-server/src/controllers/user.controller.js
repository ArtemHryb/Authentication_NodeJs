import { userService } from "../services/user.service.js";

const getAllUsers = async (req, res) => {
  const users = await userService.getAllActivated();

  res.send(users.map(userService.normalize));
};

export const userController = {
  getAllUsers,
};
