import express from "express";
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controller/UsersController.js";
import { myLogger } from "../middleware/loggerMiddileware.js";

export const usersRouter = express.Router();

usersRouter.get("/",myLogger, getAllUsers);
usersRouter.post("/", createUser);
usersRouter.get("/:id",getOneUser );
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);