import express from "express";
import { hom1, home, products, singleProducts, student } from "../controllers/userController.js";

let user = express.Router();

let userdata = []; // ✅ added

user.get("/", home);

user.post("/login", (req, res) => {
  console.log("login Post", req.body);

  userdata.push({
    name: req.body.name,
    pwd: req.body.pwd
  });

  console.log(userdata); // ✅ fixed typo

  res.redirect("/dashboard");
});

user.get("/home", hom1);
user.get("/products", products);
user.get("/products/:pid", singleProducts);

// ✅ this handles your form
user.post("/createStudent", student);
user.get("/form", (req, res) => {
  res.render("user/form");
});


export default user;
