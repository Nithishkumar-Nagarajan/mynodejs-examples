const a=require("http")

const ser=a.createServer((req,res)=>{
res.write("Im here");
res.end();
}).listen(8010,()=>{
    console.log("Server started")
});