import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

console.clear();

mongoose
  .connect(process.env.connectdatabse)
  .then(() => console.log("i am connected"))
  .catch(() => console.log("sorry i could not connect "));

const authschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
});
const model = mongoose.model("auth", authschema, "auth");
const app = express();
app.use(express.json());
app.post("/add", (req, res) => {
  const { name, email, password, age } = req.body;
  const newuser = new model({
    name: name,
    email: email,
    password: password,
    age: age,
  });
  newuser
    .save()
    .then(() => res.send("i createad the users"))
    .catch((error) => res.send(error), {new:true});
});

app.listen(3001, () => console.log("i amdone"));
