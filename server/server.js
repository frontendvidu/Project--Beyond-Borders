const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/blogDB")
  .then(() => {
    console.log("Connected to the MOngoDB");
  })
  .catch((err) => {
    console.log("error connecting to mongoDB", err);
  });

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  blogImage: String,
  authorImage: String,
});

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const Blog = mongoose.model("Blog", blogSchema, "articles");
const Email = mongoose.model("Email", emailSchema, "emails");
app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.get("/articles", async (req, res) => {
  try {
    const blogs = await Blog.find();
    console.log(blogs);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs", error: err });
  }
});

app.post("/emails", async (req, res) => {
  const data = req.body; //JSON has become a Js OBJECT due to middleware
  try {
    await Email.create({ email: data.clientEmail });
  } catch (err) {
    console.log("Server side, email didnt go to mongoDB", err);
  }
  res.status(201).json({ message: "data recieved", data });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
