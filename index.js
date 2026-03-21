import express from "express";
import adminRoute from "./routes/adminRoute.js"; // Added .js
import user from "./routes/userRoute.js";       // Added .js

let app = express();
app.use(express.json());
app.use(express.urlencoded())
app.set("view engine","ejs")
app.use("/admin", adminRoute); 
app.use("/user", user);

app.listen(8000, () => console.log('i am working'));