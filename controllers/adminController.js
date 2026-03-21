export let login = (req,res)=>
 {
  res.render("admin/login")
 }

 export  let admin = (req,res)=>
{
  res.send("admin add page")
}

export let list  = (req,res
)=> 
{
  res.send("admin list page")
}
