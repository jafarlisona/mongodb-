import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getOneBlog, updateBlog } from "../controller/BlogsController.js";
import { myLogger } from "../middleware/loggerMiddileware.js";

export const blogsRouter = express.Router();

blogsRouter.get("/",myLogger, getAllBlogs);
blogsRouter.post("/", createBlog);
blogsRouter.get("/:id",getOneBlog );
blogsRouter.put("/:id", updateBlog);
blogsRouter.delete("/:id", deleteBlog);