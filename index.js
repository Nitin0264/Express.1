import express from "express";
import adminRoute from "./routes/adminRoute.js";
import user from "./routes/userRoute.js";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/admin", adminRoute);
app.use("/user", user); // ✅ FIXED

app.listen(8000, () => console.log("i am working"));
