const express = require("express");
const { getYTB, addYTB, updateYTB, deleteYTB } = require("../controllers/YTBController");
const routerYTB = express.Router();

routerYTB.get("/api/YTB/get", getYTB );
routerYTB.post("/api/YTB/add", addYTB);
routerYTB.put("/api/YTB/update/:id", updateYTB);
routerYTB.delete("/api/YTB/delete/:id", deleteYTB);


module.exports = {
  routerYTB,
};