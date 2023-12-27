import express from "express";
import { mongoose, Schema } from "mongoose";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());

const usersSchema = new Schema({
  name: String,
  password: String,
  email: String,
  role: String,
  age: Number,
  isMarried: Boolean,
});
const usersModel = mongoose.model("users", usersSchema);

app.get("/", async (req, res) => {
  try {
    const allUsers = await usersModel.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.send("Users not Found!");
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allUsers = await usersModel.findById(id);
  res.send(allUsers);
});

app.post("/", async (req, res) => {
  try {
    const { name, password, email, role, age, isMarried } = req.body;
    const newUsers = new usersModel({
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
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, password, email, role, age, isMarried } = req.body;
  const allUsers = await usersModel.findByIdAndUpdate(id, {
    name,
    password,
    email,
    role,
    age,
    isMarried,
  });
  res.send(allUsers);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const allUsers = await usersModel.findByIdAndDelete(id);
  res.send(allUsers);
});

mongoose
  .connect(SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Not Connected!"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
