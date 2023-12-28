import { UsersModel } from "../model/UsersModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UsersModel.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.send("Users not Found!");
  }
};
export const getOneUser = async (req, res) => {
  const { id } = req.params;
  const allUsers = await UsersModel.findById(id);
  res.send(allUsers);
};
export const createUser = async (req, res) => {
  try {
    const { name, password, email, role, age, isMarried } = req.body;
    const newUsers = new UsersModel({
      name,
      password,
      email,
      role,
      age,
      isMarried,
    });
    await newUsers.save();
    res.send("User is created!");
  } catch (error) {
    res.send("User is not created!");
  }
};
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, password, email, role, age, isMarried } = req.body;
  const allUsers = await UsersModel.findByIdAndUpdate(id, {
    name,
    password,
    email,
    role,
    age,
    isMarried,
  });
  res.send(allUsers);
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const allUsers = await UsersModel.findByIdAndDelete(id);
  res.send(allUsers);
};
