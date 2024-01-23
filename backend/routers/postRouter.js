const express = require("express");
const {
  getPost,
 
} = require("../controllers/postController");
const routerPost = express.Router();

routerPost.get("/api/post/get",getPost);
module.exports = {
  routerPost,
};
