import express from "express";
import * as blogController from '../controllers/blogController.js'

const router = express.Router();

//Route for getting all blogs
router.get('/', blogController.getAllBlogs);

// Get blog by ID
router.get('/:id', blogController.getBlogByID);

//Creating a new blog post
router.post('/', blogController.createBlogPost);

//liking blog post
router.post('/like/:id', blogController.likeBlogPost);

//adding a comment
router.post('/:id/comment', blogController.addBlogComment);

//liking blog comment
router.post(':id/comment/like/:commentIndex', blogController.likeBlogComment);

//deleating blog post
router.post('/:id', blogController.deleteBlogPost);

export default  router;










