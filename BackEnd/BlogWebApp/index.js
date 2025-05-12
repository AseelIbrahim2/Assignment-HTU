import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3002;

app.use(methodOverride("_method")); // Used for handling PUT/DELETE requests in forms
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


// Post class to create post objects
class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    // Avatar image URL is generated based on the post title
    this.imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=6c757d&color=fff&rounded=true&size=60`;
  }
}
 
// Data storage
const posts = [
  new Post(1,"Welcome to the Blog!", "This is the default post to get you started. Enjoy reading!"),
];

let postId = 2;


// Home page Displays all posts
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// Create post form
app.get("/create", (req, res) => {
  res.render("create");
});

// Create a new post
app.post("/create", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const newPost = new Post(postId, title, content);
  posts.push(newPost);
  postId++;

  res.redirect("/");
});

// View a specific post by its ID
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (post) {
    res.render("post-details", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

// Edit post form
app.get("/posts/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (post) {
    res.render("edit-post", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

// Update a post 
app.post("/posts/:id/update", (req, res) => {
  const id = parseInt(req.params.id);

  // Prevent editing the default post (ID 1)
  if (id === 1) {
    return res.redirect(`/posts/${id}`);
  }

  const index = posts.findIndex(p => p.id === id);

  if (index !== -1) {
    const post = posts[index];
    const updatedPost = {
      id: post.id,
      title: req.body.title || post.title,
      content: req.body.content || post.content,
      imageUrl: post.imageUrl
    };
    posts[index] = updatedPost;
    res.redirect(`/posts/${id}`);
  } else {
    res.status(404).send("Post not found");
  }
});


// Delete post
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 1) { // Prevent deleting the default post
    return res.redirect(`/posts/${id}`); // Redirect back to the post details page
  }
  const index = posts.findIndex(p => p.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
