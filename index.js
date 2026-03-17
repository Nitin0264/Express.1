import express from "express";

let app = express();
app.get("/",(req,res) => {
  res.send("hello there the name chauhan Nitin chauhan")
});
app.get("/home",(req,res)=>
{
  res.send("using this for the products")
})
app.get("/var",(req,res)=> {
  let vari  = "hi i am nitin how can i assist you"
  res.send(vari);
});
app.listen(8000, ()=> console.log("i'm working"))