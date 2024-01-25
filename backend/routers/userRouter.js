const express = require("express");
const {  getUser } = require("../controllers/userController");
const routerUser = express.Router();

// routerUser.post("/api/user/login", login);
// routerUser.post("/api/user/register", register);

routerUser.get("/api/user/get", getUser);
// routerUser.get("/api/user/get/:id", getUserById);

// routerUser.put("/api/user/update/:id", updateUser);

// routerUser.post("/api/user/search",searchUser );

module.exports = {
  routerUser,
};
