let http = require('http'),
    fs = require("fs");
http.createServer((req,res) =>{
    let answer;
    if(req.url = "/") {
        answer =
            fs.readFileSync("index.html");
    } else
        answer = "Data not found";
    res.end(answer);
    console.log("answered");
}).listen(3008);
console.log("started");

// добавить try-catch