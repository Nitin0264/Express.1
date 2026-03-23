import express from "express"
import { admin, list, login } from "../controllers/adminController.js"

let adminRoute = express.Router()

adminRoute.get("/login/blog",login)
adminRoute.get("/admin",admin)
adminRoute.get("/list",list)
export default adminRoute