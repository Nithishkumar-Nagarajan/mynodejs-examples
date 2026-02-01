const name="NithishKumar";
let age=25;

const server1=require("http");
const port=2322;
const create1=server1.createServer((req,res)=>{
    if(req.url==="/addage"){
       age = age + 25; 

        res.write("Your Answer: " + age);
    }
    else if(req.url==="/name"){
        res.write("Your Answer:");
        res.write(name);
    }
    else{
        res.write("No Value>..");
    }
    res.end();
}).listen(port,()=>{
    console.log('Server Started');
});