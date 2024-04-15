const express = require("express");
const auth = require("../middleware/auth");
const app = express.Router();

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", require("../controllers/loginControllers"));

// category routes
app.post("/category",auth,require("../controllers/categoryControllers/addCategory"))
app.get("/categories",auth,require("../controllers/categoryControllers/allCategory"))
app.put("/category/:categoryId",auth,require("../controllers/categoryControllers/updateCategory"))
app.delete("/category/:categoryId",auth,require("../controllers/categoryControllers/deleteCategory"))

// service routes
app.post("/category/:categoryId/service",auth,require("../controllers/serviceControllers/addService"))
app.get("/category/:categoryId/services",auth,require("../controllers/serviceControllers/allService"))
app.delete("/category/:categoryId/service/:serviceId",auth,require("../controllers/serviceControllers/deleteService"))
app.put("/category/:categoryId/service/:serviceId",auth,require("../controllers/serviceControllers/updateService"))

module.exports = app;
