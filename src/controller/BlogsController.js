import { BlogsModel } from "../model/BlogsModel.js";

export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await BlogsModel.find({});
    res.status(200).json(allBlogs);
  } catch (error) {
    res.send("Blogs not Found!");
  }
};
export const getOneBlog = async (req, res) => {
  const { id } = req.params;
  const allBlogs = await BlogsModel.findById(id);
  res.send(allBlogs);
};
export const createBlog = async (req, res) => {
  try {
    const { title, description, author, date } = req.body;
    const newBlogs = new BlogsModel({ title, description, author, date });
    await newBlogs.save();
    res.send("Blog is created!");
  } catch (error) {
    res.send("Blog is not created!");
  }
};
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description, author, date } = req.body;
  const allBlogs = await BlogsModel.findByIdAndUpdate(id,{title, description, author, date});
  res.send(allBlogs);
};
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const allBlogs = await BlogsModel.findByIdAndDelete(id);
  res.send(allBlogs);
};
