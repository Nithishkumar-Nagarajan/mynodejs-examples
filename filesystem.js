const exp=require("express");

const fs=require("fs");
const app=exp();
app.use(exp.json());
const path = require("path");  


app.get("/read",(req,res)=>{
  const filename = path.join(
    "C:",
    "files",
    "nithish.txt"
  );

fs.readFile(filename,"utf8",(err,data)=>{

    if(err){
        res.send("File not found!");
    }
    else{
        res.send(data);
    }
})

})
app.post("/post",(req,res)=>{
  const filename = path.join(
    "C:",
    "files",
    "nithish.txt"
  );

fs.appendFile(filename,"\n"+req.body.msg,(err,data)=>{

    if(err){
        res.send("File not found!");
    }
    else{
        res.send("File Append Succes!");
    }
})

})
app.put("/put",(req,res)=>{
  const filename = path.join(
    "C:",
    "files",
    "nithish.txt"
  );

fs.writeFile(filename,"\n"+req.body.msg,(err,data)=>{

    if(err){
        res.send("File not found!");
    }
    else{
        res.send("File Write Succes!");
    }
})

})
app.delete("/delete",(req,res)=>{
  const filename = path.join(
    "C:",
    "files",
    "nithish.txt"
  );

fs.unlink(filename,(err,data)=>{

    if(err){
        res.send("File not found!");
    }
    else{
        res.send("File deleted Succes!");
    }
})

})
.listen(5678,()=>{
    console.log("File Server Started!")
})