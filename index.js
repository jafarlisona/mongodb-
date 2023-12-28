import "dotenv/config";
import express from "express";
import { mongoose } from "mongoose";
import { usersRouter } from "./src/router/UsersRoute.js";
import { blogsRouter } from "./src/router/BlogsRoute.js";

const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());

app.use("/api/users",usersRouter)
app.use("/api/blogs",blogsRouter)

mongoose
  .connect(SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Not Connected!"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});