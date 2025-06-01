import express from "express";
import {
  createUsers,
  getUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/createUsers", createUsers);
router.get("/update/:id", updateUsers);
router.get("/delete/:id", deleteUsers);

export default router;
