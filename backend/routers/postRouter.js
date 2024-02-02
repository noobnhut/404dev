const express = require("express");
const {
  getPost,
  updateImg,
  addPost
} = require("../controllers/postController");
const routerPost = express.Router();

routerPost.get("/api/post/get",getPost);
routerPost.post("/api/post/test",updateImg);
routerPost.post("/api/post/add",addPost);

module.exports = {
  routerPost,
};
