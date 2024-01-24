const express = require("express");
const { getLink, addLink, updateLink, deleteLink } = require("../controllers/aboutLinkController");
const routerAboutLink = express.Router();

routerAboutLink.get("/api/about_link/get", getLink);
routerAboutLink.post("/api/about_link/add", addLink);
routerAboutLink.put("/api/about_link/update/:id", updateLink);
routerAboutLink.delete("/api/about_link/delete/:id", deleteLink);


module.exports = {
  routerAboutLink,
};