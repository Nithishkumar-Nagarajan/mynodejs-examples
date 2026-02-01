const server1=require("http");

const create=server1.createServer((req,res)=>{
res.write("inside is Running>>>>>>>>>>>>");
if(req.url==="/nithish"){
    res.write("First...");
}
else if(req.url==="/Yukesh"){
res.write("Second...");
}
else{
res.write("Final");
}
res.end();
res.write("Checking............");
}).listen(2626,()=>{
console.log("Server Started::::");
});