import express from "express"
import { hom1, home, products, singleProducts, student } from "../controllers/userController.js";

let user = express.Router();

user.post("/",home);
user.get("/login",(req,res)=>
{
  res.send("userLogin")
})
user.get("/home",hom1);
user.get("/products",products)

user.get("/products/:pid",singleProducts)

user.post("/createStudent",student)
export default user