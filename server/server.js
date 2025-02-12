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
});

const Blog = mongoose.model("Blog", blogSchema, "articles");

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

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
