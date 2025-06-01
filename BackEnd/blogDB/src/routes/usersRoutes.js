import express from "express";
import { createPost, getPosts, updatePost, deletePost } from "../controllers/postsController.js";


const router = express.Router();


router.get("/posts", getPosts);


router.post("/posts/create", createPost);


router.patch("/posts/:id/edit", updatePost);


router.delete("/posts/:id/delete", deletePost);



export default router;


