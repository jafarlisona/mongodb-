import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    name: String,
    password: String,
    email: String,
    role: String,
    age: Number,
    isMarried: Boolean,
  });
 
export const UsersModel = mongoose.model("users", usersSchema);