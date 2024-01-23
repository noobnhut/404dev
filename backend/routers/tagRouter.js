const express = require("express");
const {
  getTag,
  addTag,
  updateTag,
  deleteTag,
  checkTag,
} = require("../controllers/tagController");
const routerTag = express.Router();

routerTag.get("/api/tag/get",getTag);
routerTag.post("/api/tag/add",addTag);
routerTag.put("/api/tag/update/:id",updateTag);
routerTag.delete("/api/tag/delete/:id",deleteTag);
routerTag.put("/api/tag/check/:id",checkTag);
module.exports = {
  routerTag,
};
