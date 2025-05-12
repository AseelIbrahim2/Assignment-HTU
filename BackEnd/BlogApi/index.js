import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3002;
const api_url = "http://localhost:4000";

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home page - Displays all posts
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}/posts`);
    res.render("index", { posts: response.data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

// Create post form
app.get("/create", (req, res) => {
  res.render("create");
});

// Create a new post
app.post("/create", async (req, res) => {
  try {
    const { title, content } = req.body;
    await axios.post(`${api_url}/posts`, { title, content });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

// View a specific post by its ID
app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`${api_url}/posts/${id}`);
    res.render("post-details", { post: response.data });
  } catch (error) {
    res.status(404).send("Post not found");
  }
});

// Edit post form
app.get("/posts/:id/edit", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`${api_url}/posts/${id}`);
    res.render("edit-post", { post: response.data });
  } catch (error) {
    res.status(404).send("Post not found");
  }
});

// Update a post
app.post("/posts/:id/update", async (req, res) => {
  const id = req.params.id;
  try {
    const { title, content } = req.body;
    await axios.patch(`${api_url}/posts/${id}`, { title, content });
    res.redirect(`/posts/${id}`);
  } catch (error) {
    res.status(404).send("Post not found");
  }
});

// Delete post
app.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await axios.delete(`${api_url}/posts/${id}`);
    res.redirect("/");
  } catch (error) {
    res.status(404).send("Post not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
