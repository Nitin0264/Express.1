export let home = (req,res)=>
{
  res.send("hello");

};

export let hom1 = (req,res)=>
{
  let sentence = `this is nitin chauhan <h1> asoftware developer</h1>`
  res.send(sentence)
}

export let products = (req,res)=>
{
  res.send("products")
}

export let singleProducts =  (req,res)=>
{
  res.send(`your pid is ${req.params.pid}`);
}
export let student = (req,res)=>
{
  console.log(req.body);
  res.send("form submitted succesfully")
}