import express from "express"

let app = express();

app.get("/",(req,res)=>
{
  res.send("hello thre i am nitin chauhan  and i am here to assist you ")
});
app.get("/home",(req,res)=> {
  res.send('hello there i am going to  work here')
})
// dynamic routing 
app.get('/home/:hid',(req,res)=>
{
  console.log(req.params)
  res.send(`your pid is ${req.params.hid}`);
})

app.listen(8000, ()=> console.log("we are working"))