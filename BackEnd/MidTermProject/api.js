import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let posts = [
//   { 
//     id:1, 
//     title: "Welcome to the Blog!", 
//     content: "This is the default post to get you started.",
//     imageUrl: generateImageUrl("Welcome to the Blog!") 
//   },
// ];


// let postId = 2;

// // Generate image URL using the user's title
// function generateImageUrl(title) {
//   return `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=6c757d&color=fff&rounded=true&size=60`;
// }

// // Get all posts
// app.get("/posts", (req, res) => {
//   res.json(posts);
// });

// // Get a specific post
// app.get("/posts/:id", (req, res) => {
//   const post = posts.find(p => p.id === parseInt(req.params.id));
//   if (post) {
//     res.json(post);
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

// // Create a new post
// app.post("/posts", (req, res) => {
//   const { title, content } = req.body;
//   const newPost = { 
//     id: postId++, 
//     title, 
//     content, 
//     imageUrl: generateImageUrl(title) // Generate image using the title
//   };
//   posts.push(newPost);
//   res.status(201).json(newPost);
// });


// // Update a post 
// app.patch("/posts/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const postIndex = posts.findIndex((p) => p.id === id);

//   if (postIndex !== -1) {
//     const postObj = posts[postIndex];
//     const updatedPost = {
//       id: postObj.id,
//       title: req.body.title || postObj.title,
//       content: req.body.content || postObj.content,
//       imageUrl: generateImageUrl(req.body.title || postObj.title), // Re-generate image on title change
//     };

//     posts[postIndex] = updatedPost;
//     res.status(200).json(updatedPost);
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });


// // Delete a post
// app.delete("/posts/:id", (req, res) => {
//   const index = posts.findIndex(p => p.id === parseInt(req.params.id));
//   if (index !== -1) {
//     posts.splice(index, 1);
//     res.status(200).send("Post deleted");
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });




app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
