import { Router } from "express";
import { createBlog, deleteBlog, getBlog, updateBlog } from "../controllers/blog.controller.js";

const router = Router();

router.post("/createblog", createBlog);
router.post("/getblog", getBlog);


export default router;

