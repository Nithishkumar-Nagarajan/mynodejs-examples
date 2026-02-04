const http = require("http");//module--> we can import the files 

let db = [];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST" && req.url === "/list") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      let pdata = JSON.parse(body);
      db.push(pdata);
      res.write(JSON.stringify({ message: "successfully added" }));
      res.end();
    }); 
  }

  else if (req.method === "GET" && req.url === "/show") {
    res.write(JSON.stringify(db));
    res.end(); 
  }

  else if (req.method === "PUT" && req.url === "/update") {
    let body1 = ""; 

    req.on("data", chunk => {
      body1 += chunk;
    });

    req.on("end", () => {
      const pdata1 = JSON.parse(body1);

     /* for (let i = 0; i < db.length; i++) {
        if (db[i].id === pdata1.id) {
          db[i] = pdata1;   
        }
      }*/
     db=db.map(item=>{
         if(item.id===pdata1.id){
            return{...item,...pdata1};
         }
         
         return item;
     })

      res.write(JSON.stringify({ message: "updated successfully" }));
      res.end();
    });
  }
else if (req.method === "DELETE" && req.url === "/delete") {
    let body1 = "";

    req.on("data", chunk => {
      body1 += chunk;
    });

    req.on("end", () => {
      const pdata1 = JSON.parse(body1);


     db=db.filter(item=>item.id!=pdata1.id);

/*db=db.map(item=>{
         if(item.id===pdata1.id){
          delete(item.age);
         }
         
         return item;
     })*/

      res.write(JSON.stringify({ message: "deleted successfully" }));
      res.end();
    });
  }
  else {
    res.write(JSON.stringify({ error: "not found" }));
    res.end();
  }
});

server.listen(2626, () => {
  console.log("Server Started!");
});
