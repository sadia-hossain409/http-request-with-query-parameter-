const exp= require('express');
const app= exp();


app.use("",(req,res)=>{
const id1=req.query.id;
res.send(id1);
//res.send("hi");
});





app.listen(3000, ()=>{
    console.log("http://127.0.0.1:3000");


});