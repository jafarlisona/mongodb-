import mongoose, { Schema } from "mongoose";

const blogsSchema = new Schema({
  title: String,
  description: String,
  author: String,
  date: String,
});

export const BlogsModel = mongoose.model("blogs", blogsSchema);
